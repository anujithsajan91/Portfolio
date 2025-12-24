import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.06, duration: 0.35, ease: 'easeOut' },
  }),
};

export function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="group flex flex-col justify-between rounded-xl border border-accentMuted/40 bg-gradient-to-b from-backgroundSoft/80 to-background p-4 shadow-sm shadow-black/40 transition hover:-translate-y-1 hover:border-accent hover:shadow-accent/40"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-textPrimary">
          {project.name}
        </h3>
        <p className="text-sm text-textMuted">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {project.techStack?.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accentMuted/40 px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-wide text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-textMuted/80">{project.highlight}</p>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-textMuted transition hover:text-accent"
              aria-label={`${project.name} GitHub repository`}
            >
              <FaGithub className="h-4 w-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-textMuted transition hover:text-accent"
              aria-label={`${project.name} live demo`}
            >
              <FaExternalLinkAlt className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;



