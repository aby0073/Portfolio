import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
