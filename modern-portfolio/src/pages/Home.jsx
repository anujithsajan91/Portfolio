import { motion } from 'framer-motion';
import { memo, useCallback } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import homeImg from "@/assets/images/Anujith_Home.png";
import RotatingText from '../components/RotatingText';
import { useAnimationVariants } from '../utils/animations';

const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  const element = document.querySelector(sectionId);
  if (element) {
    const offset = 100; // Account for fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const typewriterPhrases = [
  'Fresher',
  'React Developer',
  'Backend Engineer',
  'Frontend Engineer',
  'Full Stack Developer',
  'Coldfusion Developer',
];

function Home() {
  const { fadeInUp, fadeIn, scaleIn } = useAnimationVariants();
  
  const handleScrollToProjects = useCallback((e) => scrollToSection(e, '#projects'), []);
  const handleScrollToContact = useCallback((e) => scrollToSection(e, '#contact'), []);

  return (
    <div className="w-full flex flex-col gap-10 md:flex-row md:items-center">
      <motion.div
        className="flex-1 space-y-6 gpu-accelerated"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Welcome to my portfolio
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-textPrimary sm:text-4xl lg:text-5xl">
              Hi, I&apos;m <span className="text-accent">Anujith S</span>
            </h1>
        <motion.p
          className="text-base text-textMuted sm:text-lg"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
              <span className="font-medium text-textPrimary">This</span> is the
              interactive space where I showcase the projects, technologies, and
              experiences that define me as a developer.
            </motion.p>

            <div className="flex items-center gap-2">
              <p className="text-sm uppercase font-bold">
                I'm a
              </p>
              <RotatingText
                texts={typewriterPhrases}
                mainClassName="px-2 sm:px-2 md:px-3 bg-indigo-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-white font-bold"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </div>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
        >
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="inline-flex items-center justify-center rounded-md border border-accent/60 bg-transparent px-5 py-2.5 text-sm font-semibold text-accent shadow-sm shadow-accent/20 transition-colors duration-200 hover:bg-accent/10 cursor-pointer"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center rounded-md border border-accent/60 bg-transparent px-5 py-2.5 text-sm font-semibold text-accent shadow-sm shadow-accent/20 transition-colors duration-200 hover:bg-accent/10 cursor-pointer"
            >
              Hire Me
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-textMuted">
            <span className="hidden text-xs uppercase tracking-[0.2em] sm:inline">
              Connect
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/anujithsajan91"
                target="_blank"
                rel="noreferrer"
                className="text-textMuted transition-colors duration-200 hover:text-accent"
                aria-label="GitHub profile"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="text-textMuted transition-colors duration-200 hover:text-accent"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 flex flex-1 items-center justify-center md:mt-0 gpu-accelerated"
        variants={scaleIn}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-indigo-500 relative h-56 w-56 rounded-3xl border border-accentMuted/60 bg-gradient-to-tr from-accentMuted/40 via-backgroundSoft to-background shadow-[0_0_40px_rgba(56,189,248,0.35)] sm:h-64 sm:w-64 mb-8 md:mb-0">
          <div className="absolute inset-4 rounded-2xl border border-accent/20 bg-black" />
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center gap-2 text-center">
              <img 
                src={homeImg} 
                alt="Anujith S" 
                className="absolute top-0 gpu-accelerated" 
                style={{ filter: "drop-shadow(0 0 0.75rem indigo)" }} 
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default memo(Home);
