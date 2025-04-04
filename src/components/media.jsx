import { useInView } from 'framer-motion';
import isString from 'lodash/isString';
import { useContext, useRef } from 'react';
import { useMedia } from 'react-use';
import Image from 'components/image';
import Context from 'context';
import toDisplayP3 from 'helpers/to-display-p3';
import 'styles/media';

const components = {
  image: Image,
};

function Media({ background, aspectRatio = '4:3', type = 'image', ...rest }) {
  const { isDarkMode } = useContext(Context);
  const mediaRef = useRef(null);
  const isInView = useInView(mediaRef);
  const hasDisplayP3 = useMedia('(color-gamut: p3)');

  const hasDarkMode = !isString(background) && 'darkMode' in background;
  let computedBackground;

  if (hasDarkMode) {
    computedBackground = isDarkMode
      ? background.darkMode
      : background.lightMode;
  } else {
    computedBackground = background;
  }

  if (hasDisplayP3) {
    computedBackground = toDisplayP3(computedBackground);
  }

  const Component = components[type];

  return (
    <div
      className={`media media--${aspectRatio}`}
      ref={mediaRef}
      style={{ background: computedBackground }}
    >
      <div className="media__inner">
        <Component hasDarkMode={hasDarkMode} isInView={isInView} {...rest} />
      </div>
    </div>
  );
}

Media.displayName = 'Media';

export default Media;
