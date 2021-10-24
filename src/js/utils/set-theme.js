import Color from 'color';
import defaultTheme from '../../config/theme';
import duration from '../../config/duration';
import ns from '../../config/namespace';
import hasDisplayP3Support from './has-display-p3-support';
import toCSSVariable from './to-css-variable';
import toDisplayP3 from './to-display-p3';

// Think about how to include this in theme config
const foreground = {
  primary: {
    dark: 'rgba(255, 255, 255, 0.82)',
    light: 'rgba(0, 0, 0, 0.82)',
  },
  secondary: {
    dark: 'rgb(255, 255, 255)',
    light: 'rgb(0, 0, 0)',
  },
};

const setTheme = (theme = defaultTheme) => {
  const body = document.querySelector('body');
  const bodyDouble = document.querySelector(`.${ns}-body-double`);
  const themeColor = document.querySelector('meta[name="theme-color"]');

  bodyDouble.classList.add('active');

  Object.keys(theme).map((key) => {
    const themeVar = toCSSVariable(key);
    const themeColor = hasDisplayP3Support()
      ? toDisplayP3(theme[key])
      : theme[key];

    body.style.setProperty(themeVar, themeColor);
  });

  let timer = setTimeout(() => {
    bodyDouble.classList.remove('active');
    themeColor.content = theme.accent;

    Object.keys(theme).map((key) => {
      const themeVar = toCSSVariable(key + '-double');
      const themeColor = hasDisplayP3Support()
        ? toDisplayP3(theme[key])
        : theme[key];

      body.style.setProperty(themeVar, themeColor);
    });

    return clearTimeout(timer);
  }, duration.color);

  const foregroundPrimaryVar = toCSSVariable('foreground-primary');
  const foregroundSecondaryVar = toCSSVariable('foreground-secondary');
  const isDark = Color(theme.backgroundPrimary).isDark();

  let foregroundPrimaryColor = hasDisplayP3Support()
    ? toDisplayP3(foreground.primary.light)
    : foreground.primary.light;
  let foregroundSecondaryColor = hasDisplayP3Support()
    ? toDisplayP3(foreground.secondary.light)
    : foreground.secondary.light;

  if (isDark) {
    foregroundPrimaryColor = hasDisplayP3Support()
      ? toDisplayP3(foreground.primary.dark)
      : foreground.primary.dark;
    foregroundSecondaryColor = hasDisplayP3Support()
      ? toDisplayP3(foreground.secondary.dark)
      : foreground.secondary.dark;
  }

  body.style.setProperty(foregroundPrimaryVar, foregroundPrimaryColor);
  body.style.setProperty(foregroundSecondaryVar, foregroundSecondaryColor);
};

export { setTheme as default };
