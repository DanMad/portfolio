import { useEffect, useContext, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Context from '../components/context';
import Slide from '../components/slide';
import { useEventListener } from '../utils';
import { transitionDuration } from '../../config';

const Portfolio = ({ match }) => {
  const history = useHistory();

  const { data, isMounted, setIsMounted, setIsTransitioning } =
    useContext(Context);
  const projects = data.projects;
  let paths = [
    '',
    ...data.projects.map((project) => project.name.replace(/\s/g, '-')),
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (isMounted) {
      setIsMounted(false);
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        history.push(`/portfolio/${paths[slideIndex]}`);
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [slideIndex]);

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

  return (
    <>
      <Route
        exact
        path={match.url}
        render={() => (
          <Slide description="Testing, 1... 2... 3..." name="Hello World!" />
        )}
      />
      {projects.map((project) => (
        <Route
          key={project.name}
          path={match.path + '/' + project.name.replace(/\s/g, '-')}
          render={() => <Slide {...project} />}
        />
      ))}
    </>
  );
};

export { Portfolio as default };
