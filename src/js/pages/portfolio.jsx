import 'on-the-case';
import PropTypes from 'prop-types';
import { useEffect, useContext, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Context from '../components/context';
import Slide from '../components/slide';
import { useEventListener } from '../utils';

const Portfolio = ({ match }) => {
  const { data, isReady, setIsReady } = useContext(Context);
  const history = useHistory();
  let paths = [
    '',
    ...data.projects.map((project) => project.name.toKebabCase()),
  ];

  let initIndex = 0;

  paths.map((path, index) => {
    if ('/portfolio/' + path === history.location.pathname) {
      initIndex = index;
    }
  });

  const [slideIndex, setSlideIndex] = useState(initIndex);

  const handleKeyDown = (e) => {
    const isArrowKeyDown = e.keyCode === 40;
    const isArrowKeyUp = e.keyCode === 38;

    // changes global behaviour. Be careful. Put in conditional?
    // e.preventDefault();

    if (isArrowKeyDown && slideIndex < paths.length - 1) {
      setSlideIndex(slideIndex + 1);
    }

    if (isArrowKeyUp && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  useEventListener('keydown', handleKeyDown);

  // Swipe testing
  // ---------------------------------------------------------------------------
  let touchstartY = 0;
  let touchendY = 0;

  const handleSwipe = () => {
    if (touchendY > touchstartY && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }

    if (touchendY < touchstartY && slideIndex < paths.length - 1) {
      setSlideIndex(slideIndex + 1);
    }

    touchstartY = 0;
    touchendY = 0;
  };

  useEventListener('touchstart', (e) => {
    touchstartY = e.changedTouches[0].screenY;
  });

  useEventListener('touchend', (e) => {
    touchendY = e.changedTouches[0].screenY;
    handleSwipe();
  });
  // ---------------------------------------------------------------------------

  useEffect(() => {
    if (!isReady) {
      return;
    }

    setIsReady(false);

    const timer = setTimeout(() => {
      // .toKebabCase() doesn't work here.
      history.push(
        match.path + (!paths[slideIndex].length ? '' : '/' + paths[slideIndex]),
      );
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [slideIndex]);

  return (
    <>
      <Route
        exact
        path={match.path}
        render={() => (
          <Slide description="Testing, 1... 2... 3..." name="Portfolio" />
        )}
      />
      {data.projects.map((project) => (
        <Route
          key={project.name}
          path={match.path + '/' + project.name.toKebabCase()}
          render={() => <Slide {...project} />}
        />
      ))}
    </>
  );
};

Portfolio.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export { Portfolio as default };
