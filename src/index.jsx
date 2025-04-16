import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import App from 'components/app';
import { Provider } from 'context';

// Check if an image is already loaded
const isImageLoaded = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

// Check if fonts are loaded
const areFontsLoaded = async () => {
  try {
    await document.fonts.ready;
    return true;
  } catch (error) {
    console.error('Error checking fonts:', error);
    return false;
  }
};

// Check if paint worklet is loaded
const isPaintWorkletLoaded = () => {
  if (!('paintWorklet' in CSS)) return Promise.resolve(true);
  try {
    return CSS.paintWorklet.addModule('/squircle.min.js')
      .then(() => true)
      .catch(() => false);
  } catch (error) {
    return Promise.resolve(false);
  }
};

// Main initialization function
const init = async () => {
  try {
    // Check if critical assets are loaded
    const [fontsLoaded, paintWorkletLoaded] = await Promise.all([
      areFontsLoaded(),
      isPaintWorkletLoaded(),
    ]);

    // Check if images are loaded
    const imageChecks = [
      '/assets/texture.png',
      '/assets/memoji.png',
      '/assets/oc-sign-in-comp.svg',
      '/assets/oc-quiz-comp-1.svg',
      '/assets/oc-quiz-comp-2.svg',
      '/assets/weather-app-low-uvi-comp.svg',
      '/assets/weather-app-moderate-uvi-comp.svg',
      '/assets/weather-app-extreme-uvi-comp.svg',
    ].map(isImageLoaded);

    const imagesLoaded = await Promise.all(imageChecks);

    // Log any missing assets
    if (!fontsLoaded) console.warn('Some fonts may not be loaded');
    if (!paintWorkletLoaded) console.warn('Paint worklet not loaded');
    if (imagesLoaded.some(loaded => !loaded)) console.warn('Some images may not be loaded');

    // Mount React app
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

  } catch (error) {
    console.error('Error during initialization:', error);
  }
};

// Start the initialization process
init();
