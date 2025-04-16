import { AnimatePresence } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import Context from 'context';
import About from 'pages/about';
import NotFound from 'pages/not-found';
import OpenCollegesDesignSystem from 'pages/open-colleges-design-system';
import PersonalBrand from 'pages/personal-brand';
import Projects from 'pages/projects';
import Weather from 'pages/weather';
import 'styles/reset';
import 'styles/tokens';
import 'styles/boilerplate';

function App() {
  const { hasCursor } = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    const rootElement = document.querySelector('#root');

    if (!rootElement) {
      return;
    }

    if (hasCursor) {
      rootElement.classList.add('has-cursor');
    } else {
      rootElement.classList.remove('has-cursor');
    }
  }, [hasCursor]);

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<About />} path="about" />
        <Route element={<Navigate replace to="/projects" />} index />
        <Route path="projects/*">
          <Route element={<Projects />} index />
          <Route
            element={<OpenCollegesDesignSystem />}
            path="open-colleges-design-system"
          />
          <Route element={<PersonalBrand />} path="personal-brand" />
          <Route element={<Weather />} path="weather" />
          <Route element={<NotFound />} path="*" />
        </Route>
        <Route element={<NotFound />} path="*" />
      </Routes>
    </AnimatePresence>
  );
}

if (process.env.NODE_ENV !== 'production') {
  App.displayName = 'App';
}

export default App;
