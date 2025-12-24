import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};


export function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 h-full flex">
      <motion.div
        className="space-y-6"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Projects
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-textPrimary sm:text-3xl">
            Work I&apos;ve built to learn and grow.
          </h2>
          <p className="text-sm text-textMuted sm:text-base">
            These projects highlight my experience with React, UI design,
            and Coldfusion Backend.
          </p>
        </div>

        {/* <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-accentMuted/50 bg-backgroundSoft/70 px-4 py-3 text-xs text-textMuted">
          <p className="text-[0.7rem] uppercase tracking-[0.25em] text-textMuted/80">
            Filters
          </p>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                className="rounded-full border border-accentMuted/60 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-textMuted transition hover:border-accent hover:text-accent"
              >
                {option}
              </button>
            ))}
          </div>
        </div> */}

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;



