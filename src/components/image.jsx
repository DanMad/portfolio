import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useMediaContext } from 'context/media';
import useVariants from 'hooks/use-variants';
import 'styles/media.scss';

function Image({ alt, isInView, src }) {
  const { devicePixelRatio, hasCursor, isDark } = useMediaContext();
  const [loadedColorSchemes, setLoadedColorSchemes] = useState([]);
  const { animate, initial } = useVariants();

  const colorScheme = isDark ? 'dark' : 'light';

  const handleLoad = () => {
    setLoadedColorSchemes((prevColorSchemes) => {
      return [...prevColorSchemes, colorScheme];
    });
  };

  const contextualSrc = src.replace(/(\.[a-zA-Z]{3,4})$/, (_, extension) => {
    return `-${colorScheme}@${devicePixelRatio > 3 ? 3 : devicePixelRatio}x${extension}`;
  });

  const isLoading = !loadedColorSchemes.includes(colorScheme);

  useEffect(() => {
    if (!isInView || !isLoading) {
      return;
    }

    const imageElement = document.createElement('img');

    imageElement.src = contextualSrc;

    if (imageElement.complete) {
      handleLoad();
    } else {
      imageElement.addEventListener('load', handleLoad);
    }

    // window.imageCache[contextualSrc] = imageElement;

    return () => {
      imageElement.removeEventListener('load', handleLoad);
    };
  }, [colorScheme, devicePixelRatio, isInView]);

  return (
    !isLoading && (
      <motion.img
        alt={alt}
        animate="animate"
        className="media__img"
        initial="initial"
        src={contextualSrc}
        transition={{
          duration: 3,
          ease: [0.39, 0.575, 0.565, 1],
        }}
        variants={{
          animate: animate({ transition: { duration: 3 }, y: null }),
          initial: initial({
            transition: { duration: 3, ease: [0.39, 0.575, 0.565, 1] },
            y: null,
          }),
          ...(hasCursor && {
            hover: {
              scale: 1.078313,
            },
          }),
        }}
        {...(hasCursor && { whileHover: 'hover' })}
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

export default Image;
