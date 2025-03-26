import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router';
import About from 'pages/about';
import Home from 'pages/home';
import NotFound from 'pages/not-found';
import OpenCollegesDesignSystem from 'pages/open-colleges-design-system';
import PersonalBrand from 'pages/personal-brand';
import Projects from 'pages/projects';
import Weather from 'pages/weather';
import 'styles/app';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<Home />} path="/" />
        <Route path="projects/*">
          <Route element={<Projects />} index />
          <Route element={<PersonalBrand />} path="personal-brand" />
          {/* <Route element={<EddyDesignSystem />} path="eddy-design-system" /> */}
          <Route
            element={<OpenCollegesDesignSystem />}
            path="open-colleges-design-system"
          />
          <Route element={<Weather />} path="weather" />
          <Route element={<NotFound />} path="*" />
        </Route>
        <Route element={<About />} path="about" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
