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
    if (!app.isReady) {
      return;
    }

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

  useEventListener('wheel', (e) => {
    if (!app.isReady) {
      return;
    }

    var delta = null,
      direction = false;

    if (e.wheelDelta) {
      // will work in most cases
      delta = e.wheelDelta / 60;
    } else if (e.detail) {
      // fallback for Firefox
      delta = -e.detail / 2;
    }
    if (delta !== null) {
      direction = delta > 0 ? 'up' : 'down';
    }

    console.log(direction);

    if (direction === 'down' && slideIndex < paths.length - 1) {
      setSlideIndex(slideIndex + 1);
    }

    if (direction === 'up' && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  });

  // Swipe testing
  // ---------------------------------------------------------------------------
  let touchstartY = 0;
  let touchendY = 0;

  const handleSwipe = () => {
    if (!app.isReady) {
      return;
    }

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
