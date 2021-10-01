import 'on-the-case';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { address, theme } from '../../config';

const Head = (props) => {
  const { themeColor, title } = props;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content={themeColor} />
      <title>
        {title.toTitleCase()} | {address.nakedDomain}
      </title>
    </Helmet>
  );
};

Head.propTypes = {
  themeColor: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Head.defaultProps = {
  themeColor: theme.backgroundPrimary,
};

export { Head as default };
