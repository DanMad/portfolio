import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import App from 'app';
import AnimationProvider from 'context/animation';
import MediaProvider from 'context/media';

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
      <AnimationProvider>
        <MediaProvider>
          <Router>
            <App />
          </Router>
        </MediaProvider>
      </AnimationProvider>
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

      // window.imageCache[url] = image;
    });
  });

  return Promise.all(promises);
};

const loadAssets = async (fonts, urls) => {
  try {
    await Promise.all([loadFonts(fonts), loadImages(urls)]);

    if ('paintWorklet' in CSS) {
      await CSS.paintWorklet.addModule('/squircle.min.js');
    }

    const preloaderElement = document.querySelector('.preloader');

    preloaderElement.addEventListener('transitionend', handleTransitionEnd);
    preloaderElement.classList.remove('is-ready');
  } catch (error) {
    console.error('Error loading assets', error);
  }
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
  '/assets/360x640-placeholder-1.svg',
  '/assets/360x640-placeholder-2.svg',
  '/assets/360x640-placeholder-3.svg',
  '/assets/memoji.png',
  '/assets/texture.png',
];

// window.imageCache = window.imageCache || {};

loadAssets(fonts, images);
