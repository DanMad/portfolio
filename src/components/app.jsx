import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import About from 'pages/about';
import EddyDesignSystem from 'pages/eddy-design-system';
import NotFound from 'pages/not-found';
import OpenCollegesDesignSystem from 'pages/open-colleges-design-system';
import PersonalBrand from 'pages/personal-brand';
import Projects from 'pages/projects';
import Weather from 'pages/weather';
import 'styles/reset';
import 'styles/tokens';
import 'styles/boilerplate';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<About />} path="about" />
        <Route element={<Navigate replace to="projects" />} index />
        <Route path="projects/*">
          <Route element={<EddyDesignSystem />} path="eddy-design-system" />
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

export default App;
