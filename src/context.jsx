import { createContext, useState } from 'react';
import { useMedia } from 'react-use';

const Context = createContext({
  isDarkMode: false,
  isSlideButtonFocused: false,
  setIsSlideButtonFocused: () => {},
  setShouldHeaderAnimate: () => {},
  shouldHeaderAnimate: true,
});

const Provider = ({ children }) => {
  const isDarkMode = useMedia('(prefers-color-scheme: dark)');
  const [shouldHeaderAnimate, setShouldHeaderAnimate] = useState(true);
  const [isSlideButtonFocused, setIsSlideButtonFocused] = useState(false);

  return (
    <Context
      value={{
        isDarkMode,
        isSlideButtonFocused,
        setIsSlideButtonFocused,
        setShouldHeaderAnimate,
        shouldHeaderAnimate,
      }}
    >
      {children}
    </Context>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Provider.displayName = 'Provider';
}

export default Context;
export { Provider };
