import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import homeImg from "@/assets/images/Anujith_Home.png";
import RotatingText from '../components/RotatingText'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const subTextVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.4, ease: 'easeOut' },
  },
};

const buttonsVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.35, duration: 0.4, ease: 'easeOut' },
  },
};

const typewriterPhrases = [
  'Fresher',
  'React Developer',
  'Backend Engineer',
  'Frontend Engineer',
  'Full Stack Developer',
  'Coldfusion Developer',
];

export function Home() {
  return (
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 h-full flex">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-12 md:flex-row md:items-center">
          <motion.div
            className="flex-1 space-y-6"
            variants={containerVariants}
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
              variants={subTextVariants}
              initial="hidden"
              animate="visible"
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
              variants={buttonsVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-md border border-accent/60 bg-transparent px-5 py-2.5 text-sm font-semibold text-accent shadow-sm shadow-accent/20 transition hover:bg-accent/10"
                >
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-accent/60 bg-transparent px-5 py-2.5 text-sm font-semibold text-accent shadow-sm shadow-accent/20 transition hover:bg-accent/10"
                >
                  Hire Me
                </Link>
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
                    className="text-textMuted transition hover:text-accent"
                    aria-label="GitHub profile"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/your-linkedin" // TODO: Replace
                    target="_blank"
                    rel="noreferrer"
                    className="text-textMuted transition hover:text-accent"
                    aria-label="LinkedIn profile"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-1 items-center justify-center md:mt-0"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
          >
            <div className="bg-indigo-500 relative h-56 w-56 rounded-3xl border border-accentMuted/60 bg-gradient-to-tr from-accentMuted/40 via-backgroundSoft to-background shadow-[0_0_40px_rgba(56,189,248,0.35)] sm:h-64 sm:w-64">
              <div className="absolute inset-4 rounded-2xl border border-accent/20 bg-black" />
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="flex flex-col items-center gap-2 text-center">
                  <img src={homeImg} alt="" className='absolute top-0' style={{ filter: "drop-shadow(0 0 0.75rem indigo)" }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

  );
}

export default Home;
