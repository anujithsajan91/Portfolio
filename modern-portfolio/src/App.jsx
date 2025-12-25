import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import DarkVeil from './components/DarkVeil';
import ClickSpark from './components/ClickSpark';

const RouteWrapper = ({ children }) => (
  <motion.main
    className="relative z-10 flex-1 overflow-y-scroll section-scroll w-full mb-8"
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    style={{ paddingTop: '90px', scrollPaddingTop: '90px' }}
  >
    {children}
  </motion.main>
);

function App() {
  return (
    <HashRouter>
      <div className="w-full h-screen relative flex justify-center items-center">

        {/* Background */}
        <DarkVeil className="fixed inset-0 -z-10" />

        {/* Foreground */}
        <div className="absolute flex flex-col items-center h-full w-full max-w-7xl">
          <div className="w-full px-4 pt-3 flex justify-center">
            <Navbar />
          </div>

          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <RouteWrapper className="h-full">
                  <ClickSpark
                    sparkColor='#fff'
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <Home />
                  </ClickSpark>
                </RouteWrapper>
              } />
              <Route path="/about" element={
                <RouteWrapper className="h-full">
                  <ClickSpark
                    sparkColor='#fff'
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <About />
                  </ClickSpark>
                </RouteWrapper>
              } />
              <Route path="/skills" element={
                <RouteWrapper className="h-full">
                  <ClickSpark
                    sparkColor='#fff'
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <Skills />
                  </ClickSpark>
                </RouteWrapper>
              } />
              <Route path="/projects" element={
                <RouteWrapper className="h-full">
                  <ClickSpark
                    sparkColor='#fff'
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <Projects />
                  </ClickSpark>
                </RouteWrapper>
              } />
              <Route path="/experience" element={
                <RouteWrapper className="h-full">
                  <ClickSpark
                    sparkColor='#fff'
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <Experience />
                  </ClickSpark>
                </RouteWrapper>
              } />
              <Route path="/contact" element={
                <RouteWrapper className="h-full">
                  <ClickSpark
                    sparkColor='#fff'
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                  >
                    <Contact />
                  </ClickSpark>
                </RouteWrapper>
              } />
            </Routes>
          </AnimatePresence>

          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}



export default App;
