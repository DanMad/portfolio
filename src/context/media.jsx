import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { useMedia } from 'react-use';
import useDevicePixelRatio from 'hooks/use-device-pixel-ratio';

const MediaContext = createContext({
  devicePixelRatio: 1,
  hasCursor: false,
  isDark: false,
  isP3: false,
});

const MediaProvider = ({ children }) => {
  const devicePixelRatio = useDevicePixelRatio();
  const hasCursor = useMedia('(hover: hover) and (pointer: fine)');
  const isDark = useMedia('(prefers-color-scheme: dark)');
  const isP3 = useMedia('(color-gamut: p3)');

  const value = {
    devicePixelRatio,
    hasCursor,
    isDark,
    isP3,
  };

  return <MediaContext value={value}>{children}</MediaContext>;
};

MediaProvider.displayName = 'MediaProvider';

MediaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useMediaContext = () => {
  return useContext(MediaContext);
};

export default MediaProvider;
export { useMediaContext };
