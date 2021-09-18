import Color from 'color';
import defaultTheme from '../../config/theme';
import hasDisplayP3Support from './has-display-p3-support';
import toCSSVariable from './to-css-variable';
import toDisplayP3 from './to-display-p3';

const setTheme = (theme = defaultTheme) => {
  const root = document.documentElement;

  Object.keys(theme).map((themeToken) => {
    const themeVar = toCSSVariable(themeToken);
    let themeColor = hasDisplayP3Support()
      ? toDisplayP3(theme[themeToken])
      : theme[themeToken];

    root.style.setProperty(themeVar, themeColor);
  });

  const foregroundPrimary = toCSSVariable('foreground-primary');
  // const foregroundSecondary = toCSSVariable('foreground-secondary');
  const isDark = Color(theme.backgroundPrimary).isDark();

  if (isDark) {
    const white = toCSSVariable('white');

    root.style.setProperty(foregroundPrimary, white);
  } else {
    const black = toCSSVariable('black');

    root.style.setProperty(foregroundPrimary, black);
  }
};

export { setTheme as default };
