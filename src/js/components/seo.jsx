import 'on-the-case';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { address } from '../../config';

const SEO = ({ description, image, imageAlt, title }) => {
  const { pathname } = useLocation();

  return (
    <Helmet
      title={title.toTitleCase()}
      titleTemplate={'%s | ' + address.nakedDomain}
    >
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
      <meta content={address.URL + 'assets/' + image} property="og:image" />
      <meta
        content={title.toTitleCase() + ' | ' + address.nakedDomain}
        property="og:title"
      />
      <meta content={address.URL + pathname} property="og:url" />
      <meta content={description} name="twitter:description" />
      <meta content={address.URL + 'assets/' + image} name="twitter:image" />
      {imageAlt && <meta content={imageAlt} name="twitter:image:alt" />}
      <meta content={address.URL + pathname} property="twitter:site" />
      <meta
        content={title.toTitleCase() + ' | ' + address.nakedDomain}
        name="twitter:title"
      />
      <link href={address.URL + pathname} rel="canonical" />
    </Helmet>
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  description: 'defaultProp, To Be Defined',
  image: 'defaultProp, To Be Defined',
};

export { SEO as default };
