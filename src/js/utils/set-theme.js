import Color from 'color';
import { namespace as ns } from '../../config';

const setTheme = (theme) => {
  const body = document.body;
  const lighting = document.querySelector(`.${ns}-lighting`);

  if (typeof theme === 'undefined') {
    body.classList.remove(`${ns}-dark`);
    body.style.background = '';
    lighting.style.background = '';
  } else {
    const isDark = Color(theme.backgroundPrimary).isDark();

    if (isDark) {
      body.classList.add(`${ns}-dark`);
    } else {
      body.classList.remove(`${ns}-dark`);
    }

    body.style.background = theme.backgroundPrimary;
    lighting.style.background = theme.lighting;
  }
};

export { setTheme as default };
