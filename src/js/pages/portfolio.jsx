import PropTypes from 'prop-types';
import { useEffect, useContext, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Context from '../components/context';
import Slide from '../components/slide';
import { useEventListener } from '../utils';
// import { transitionDuration } from '../../config';

const Portfolio = ({ match }) => {
  const history = useHistory();
  const { data, isReady, setIsReady } = useContext(Context);
  const projects = data.projects;
  let paths = [
    '',
    ...data.projects.map((project) => project.name.toKebabCase()),
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const handleKeyDown = (e) => {
    const isArrowKeyDown = e.keyCode === 40;
    const isArrowKeyUp = e.keyCode === 38;

    e.preventDefault();

    if (isArrowKeyDown && slideIndex < paths.length - 1) {
      setSlideIndex(slideIndex + 1);
    }

    if (isArrowKeyUp && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  useEventListener('keydown', handleKeyDown);

  useEffect(() => {
    if (!isReady) return;

    setIsReady(false);

    const timer = setTimeout(() => {
      history.push(match.path + '/' + paths[slideIndex]);
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
          <Slide description="Testing, 1... 2... 3..." name="Hello World!" />
        )}
      />
      {projects.map((project) => (
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
