import { useContext, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Context from '../components/context';
import Slide from '../components/slide';
import { useEventListener } from '../utils';

const Portfolio = ({ match }) => {
  const history = useHistory();
  const { data } = useContext(Context);
  const projects = data.projects;
  let paths = [
    '',
    ...data.projects.map((project) => project.name.replace(/\s/g, '-')),
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const handleKeyDown = (e) => {
    e.preventDefault();

    // Key down
    if (e.keyCode === 40) {
      if (slideIndex < paths.length - 1) {
        history.push(`/portfolio/${paths[slideIndex + 1]}`);
        setSlideIndex(slideIndex + 1);
      }
    }

    // Key up
    if (e.keyCode === 38) {
      if (slideIndex > 0) {
        history.push(`/portfolio/${paths[slideIndex - 1]}`);
        setSlideIndex(slideIndex - 1);
      }
    }
  };

  useEventListener('keydown', handleKeyDown);

  return (
    <>
      <Route exact path={match.url} render={() => <h1>Portfolio</h1>} />
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
