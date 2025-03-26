import { useLayoutEffect, useState } from 'react';

function useElementSize(ref) {
  const [size, setSize] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    setSize({
      height: element.offsetHeight,
      width: element.offsetWidth,
    });

    const resizeObserver = new ResizeObserver(() =>
      setSize({
        height: element.offsetHeight,
        width: element.offsetWidth,
      }),
    );

    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
    };
  }, [ref]);

  return size;
}

export default useElementSize;
