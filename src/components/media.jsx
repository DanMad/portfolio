import classNames from 'classnames';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import useMedia from 'use-media';
import 'styles/media.scss';

function Image({ alt, isDark, onLoad, src }) {
  const contextualSrc = src.replace(
    /(@[23]x)?(\.[a-zA-Z]{3,4})$/,
    (match, p1, p2) => {
      return (isDark ? '-dark' : '-light') + (p1 || '') + p2;
    },
  );

  // useEffect(() => {
  //   // setIsLoading(false);
  // }, [isDark]);

  return (
    <motion.img
      alt={alt}
      animate="active"
      className="media__img"
      initial="inactive"
      onLoad={onLoad}
      src={contextualSrc}
      transition={{
        duration: 3,
        ease: [0.39, 0.575, 0.565, 1],
      }}
      variants={{
        active: {
          opacity: 1,
        },
        hovered: {
          scale: 1.078313,
          transition: {
            duration: 3,
            ease: [0.39, 0.575, 0.565, 1],
          },
        },
        inactive: { opacity: 0 },
      }}
      whileHover="hovered"
    />
  );
}

Image.displayName = 'Image';

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

const media = {
  image: Image,
};

function Media({
  backgroundColor,
  aspectRatio = '4:3',
  type = 'image',
  ...rest
}) {
  const isDark = useMedia('(prefers-color-scheme: dark)');
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
    console.log('Media loaded');
  };

  const Component = media[type];
  const className = classNames('media', `media--${aspectRatio}`);

  return (
    <div className={className} ref={ref} style={{ backgroundColor }}>
      <div className="media__inner">
        {(isInView || !isLoading) && (
          <Component isDark={isDark} onLoad={handleLoad} {...rest} />
        )}
      </div>
    </div>
  );
}

Media.displayName = 'Media';

Media.propTypes = {
  alt: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['4:3', '16:9']),
  background: PropTypes.string.isRequired,
  src: PropTypes.string,
  type: PropTypes.oneOf(['image']),
};

export default Media;
