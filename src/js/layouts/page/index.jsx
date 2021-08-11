import parse from 'html-react-parser';
import PropTypes from 'prop-types';
// import { Link, Route, useRouteMatch } from 'react-router-dom';
import Heading from '../../components/heading';

const Page = (props) => {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  // let { path, url } = useRouteMatch();

  // console.log(path, url);

  if (props.type === 'slideshow') {
    return <main></main>;
  } else {
    return (
      <main>
        <Heading>{props.title}</Heading>
        {parse(props.innerHTML)}
        {/* <Link to={`${url}/foo`}>Foo</Link>
        <Route path={`${url}/foo`}>
          <h2>Foo!</h2>
        </Route> */}
      </main>
    );
  }
};

Page.propTypes = {
  innerHTML: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        innerHTML: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ]),
  ),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['slideshow', 'static']),
};

Page.defaultProps = {
  type: 'static',
};

export { Page as default };
