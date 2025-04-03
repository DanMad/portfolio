import classNames from 'classnames';
import { useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Image from 'components/image';
import { useMediaContext } from 'context/media';
import toP3 from 'helpers/to-p3';
import 'styles/media';

const components = {
  image: Image,
};

function Media({ background, aspectRatio = '4:3', type = 'image', ...rest }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { isDark, isP3 } = useMediaContext();

  const mediaClassNames = classNames('media', `media--${aspectRatio}`);

  let contextualBackground = isDark ? background.dark : background.light;

  if (isP3) {
    contextualBackground = toP3(contextualBackground);
  }

  const mediaStyles = {
    background: contextualBackground,
  };

  const Component = components[type];

  return (
    <div className={mediaClassNames} ref={ref} style={mediaStyles}>
      <div className="media__inner">
        <Component isInView={isInView} {...rest} />
      </div>
    </div>
  );
}

Media.displayName = 'Media';

Media.propTypes = {
  alt: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['1:1', '4:3', '16:9']),
  background: PropTypes.shape({
    dark: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired,
  }).isRequired,
  src: PropTypes.string,
  type: PropTypes.oneOf(['image']),
};

export default Media;
