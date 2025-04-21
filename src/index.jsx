import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import App from 'components/app';
import { Provider } from 'context';

const handleTransitionEnd = (e) => {
  if (e.target.classList.contains('is-ready')) {
    return;
  }

  e.target.removeEventListener('transitionend', handleTransitionEnd);
  e.target.remove();

  const rootElement = document.querySelector('#root');
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <Provider>
        <Router>
          <App />
        </Router>
      </Provider>
    </StrictMode>,
  );
};

const loadFonts = async (fonts) => {
  const promises = fonts.map(async (font) => {
    await font.load();
    return document.fonts.add(font);
  });

  await Promise.all(promises);
};

const loadImages = async (urls) => {
  const promises = urls.map((url) => {
    return new Promise((resolve) => {
      const image = new Image();

      image.onerror = resolve;
      image.onload = resolve;
      image.src = url;
    });
  });

  return Promise.all(promises);
};

const fonts = [
  new FontFace('Bitter', 'url(/assets/bitter.woff2)', {
    format: 'woff2-variations',
    style: 'normal',
    weight: '900',
  }),
  new FontFace('Inter', 'url(/assets/inter.woff2)', {
    format: 'woff2-variations',
    style: 'normal',
    weight: '400 700',
  }),
];

const images = [
  '/assets/memoji.png',
  '/assets/oc-sign-in-comp.svg',
  '/assets/oc-quiz-comp-1.svg',
  '/assets/oc-quiz-comp-2.svg',
  '/assets/texture.png',
  '/assets/personal-brand-resume-comp-light.svg',
  '/assets/personal-brand-tax-invoice-comp-light.svg',
  '/assets/weather-app-low-uvi-comp.svg',
  '/assets/weather-app-moderate-uvi-comp.svg',
  '/assets/weather-app-extreme-uvi-comp.svg',
]

try {
  await Promise.all([loadFonts(fonts), loadImages(images)]);

  if ('paintWorklet' in CSS) {
    await CSS.paintWorklet.addModule('/squircle.min.js');
  }

  const preloaderElement = document.querySelector('.preloader');

  preloaderElement.addEventListener('transitionend', handleTransitionEnd);
  preloaderElement.classList.remove('is-ready');
} catch (error) {
  console.error('Error loading assets', error);
}
