import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skill/Skills';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footers';
import AllProjects from './components/AllProjects/AllProjects';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About/About';
import ExperienceSection from './components/experience/ExperienceSection';

const AppContent = () => {
  const location = useLocation();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  // Hide navbar on /projects route
  const showNavbar = location.pathname !== '/projects';

  return (
    <>
      <ScrollToTop />
      {showNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <ExperienceSection />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
