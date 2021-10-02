import 'on-the-case';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { address } from '../../config';
import { toCSSVariable } from '../utils';

const SEO = (props) => {
  const { canonicalURL, description, title } = props;

  return (
    <Helmet>
      <title>
        {title.toTitleCase()} | {address.nakedDomain}
      </title>
      {description && <meta name="description" content={description} />}
      {canonicalURL && <link rel="canonical" href={canonicalURL} />}
    </Helmet>
  );
};

SEO.propTypes = {
  canonicalURL: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

SEO.defaultProps = {};

export { SEO as default };
