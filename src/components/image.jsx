import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import Context from 'context';
import toVariant from 'helpers/to-variant';
import 'styles/image';

function Image({ alt, src, hasDarkMode = false, isInView = false }) {
  const { hasCursor, isDarkMode } = useContext(Context);
  const [loadedModes, setLoadedModes] = useState([]);

  const mode = hasDarkMode && isDarkMode ? 'dark' : 'light';
  const computedSrc = src.replace(
    /(\.[a-zA-Z]{3,4})$/,
    `${hasDarkMode ? `-${mode}` : ''}@${Math.min(window.devicePixelRatio, 3)}x$1`,
  );
  const isLoading = !loadedModes.includes(mode);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (!isLoading) {
      return;
    }

    const handleLoad = () => {
      setLoadedModes((prevModes) => {
        return [...prevModes, mode];
      });
    };

    const imageElement = document.createElement('img');
    imageElement.src = computedSrc;

    if (imageElement.complete) {
      handleLoad();
    } else {
      imageElement.addEventListener('load', handleLoad);
    }

    return () => {
      imageElement.removeEventListener('load', handleLoad);
    };
  }, [computedSrc, mode, isInView, isLoading]);

  const variants = {
    animate: toVariant('animate', {
      transition: {
        duration: 3,
      },
      y: null,
    }),
    initial: toVariant('initial', {
      transition: {
        duration: 3,
        ease: [0.39, 0.575, 0.565, 1],
      },
      y: null,
    }),
    ...(hasCursor && {
      hover: {
        scale: 1.078313,
      },
    }),
  };

  return (
    !isLoading && (
      <motion.img
        alt={alt}
        animate="animate"
        className="img"
        initial="initial"
        src={computedSrc}
        transition={{
          duration: 3,
          ease: [0.39, 0.575, 0.565, 1],
        }}
        variants={variants}
        {...(hasCursor && { whileHover: 'hover' })}
      />
    )
  );
}

if (process.env.NODE_ENV !== 'production') {
  Image.displayName = 'Image';
}

export default Image;
