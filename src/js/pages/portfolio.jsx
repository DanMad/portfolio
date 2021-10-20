import 'on-the-case';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { duration } from '../../config';
import Context from '../components/context';
import Slide from '../components/slide';
import { useEventListener } from '../hooks';

const Portfolio = ({ match }) => {
  const { app, data } = useContext(Context);
  const history = useHistory();
  let paths = [
    '',
    ...data.projects.map((project) => project.title.toKebabCase()),
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
    if (!app.isReady) {
      return;
    }

    app.setIsReady(false);

    const timer = setTimeout(() => {
      history.push(
        match.path + (!paths[slideIndex].length ? '' : '/' + paths[slideIndex]),
      );
    }, duration.unit * 11);

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
          <Slide description="Testing, 1... 2... 3..." title="Portfolio" />
        )}
      />
      {data.projects.map((project) => (
        <Route
          key={project.title}
          path={match.path + '/' + project.title.toKebabCase()}
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
