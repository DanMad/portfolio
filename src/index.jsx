import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import App from 'app';
import AnimationProvider from 'context/animation';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AnimationProvider>
      <Router>
        <App />
      </Router>
    </AnimationProvider>
  </StrictMode>,
);
