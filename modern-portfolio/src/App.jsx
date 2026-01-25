import './App.css';
import { memo } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import DarkVeil from './components/DarkVeil';

// Section spacing constants for consistency
const SECTION_PADDING = '';
const SECTION_CONTAINER = 'mx-auto max-w-5xl px-4 sm:px-6';

function App() {
  return (
    <>
      {/* Fixed background - does NOT scroll */}
      import DarkVeil from './DarkVeil';

      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.8}
        scanlineFrequency={0}
        warpAmount={3.5}
      />

      {/* ClickSpark wrapper - above all content */}
        <div className="relative w-full  z-10">
          {/* Navbar - fixed at top */}
          <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3">
            <Navbar />
          </div>

          {/* Main content container */}
          <main className="relative z-10 w-full pt-24" style={{ scrollPaddingTop: '100px' }}>
            <section id="home" className={`flex items-center ${SECTION_PADDING} ${SECTION_CONTAINER}`} style={{ height: '87vh' }}>
              <Home />
            </section>

            <section id="about" className={` flex items-center ${SECTION_PADDING} ${SECTION_CONTAINER}`}>
              <About />
            </section>

            <section id="skills" className={` flex items-center ${SECTION_PADDING} ${SECTION_CONTAINER}`}>
              <Skills />
            </section>

            <section id="experience" className={` flex items-center ${SECTION_PADDING} ${SECTION_CONTAINER}`}>
              <Experience />
            </section>

            <section id="projects" className={`flex items-center ${SECTION_PADDING} ${SECTION_CONTAINER}`}>
              <Projects />
            </section>

            <section id="contact" className={` flex items-center ${SECTION_PADDING} ${SECTION_CONTAINER}`}>
              <Contact />
            </section>
          </main>

          <Footer />
        </div>
    </>
  );
}

export default memo(App);
