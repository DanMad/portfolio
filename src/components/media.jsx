import classNames from 'classnames';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import useColorScheme from 'hooks/use-color-scheme';
import useDevicePixelRatio from 'hooks/use-device-pixel-ratio';
import 'styles/media.scss';

function Image({ alt, isInView, src }) {
  const colorScheme = useColorScheme();
  const devicePixelRatio = useDevicePixelRatio();
  const [loadedColorSchemes, setLoadedColorSchemes] = useState([]);

  const handleLoad = () => {
    setLoadedColorSchemes((prevColorSchemes) => {
      return [...prevColorSchemes, colorScheme];
    });
  };

  const isLoading = !loadedColorSchemes.includes(colorScheme);

  const contextualSrc = src.replace(/(\.[a-zA-Z]{3,4})$/, (_, extension) => {
    return `-${colorScheme}@${devicePixelRatio > 3 ? 3 : devicePixelRatio}x${extension}`;
  });

  useEffect(() => {
    if (!isInView || !isLoading) {
      return;
    }

    const img = document.createElement('img');

    img.src = contextualSrc;

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener('load', handleLoad);
    }

    return () => {
      img.removeEventListener('load', handleLoad);
    };
  }, [colorScheme, devicePixelRatio, isInView]);

  return (
    !isLoading && (
      <motion.img
        alt={alt}
        animate="active"
        className="media__img"
        initial="inactive"
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
          inactive: {
            opacity: 0,
          },
        }}
        whileHover="hovered"
      />
    )
  );
}

Image.displayName = 'Image';

Image.propTypes = {
  alt: PropTypes.string,
  isInView: PropTypes.bool.isRequired,
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
  const ref = useRef(null);
  const isInView = useInView(ref);

  const Component = media[type];
  const mediaClassNames = classNames('media', `media--${aspectRatio}`);

  return (
    <div className={mediaClassNames} ref={ref} style={{ backgroundColor }}>
      <div className="media__inner">
        <Component isInView={isInView} {...rest} />
      </div>
    </div>
  );
}

Media.displayName = 'Media';

Media.propTypes = {
  alt: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['4:3', '16:9']),
  backgroundColor: PropTypes.string.isRequired,
  src: PropTypes.string,
  type: PropTypes.oneOf(['image']),
};

export default Media;
