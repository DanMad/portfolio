import { useEffect, useState } from 'react';

function useDevicePixelRatio() {
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    () => window.devicePixelRatio || 1,
  );

  const handleResize = () => {
    setDevicePixelRatio(window.devicePixelRatio || 1);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return devicePixelRatio;
}

export default useDevicePixelRatio;
