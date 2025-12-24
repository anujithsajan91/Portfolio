import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const experiences = [
  {
    title: 'Associate Software Engineer Trainee',
    company: 'Techversant infotech, Trivandrum',
    duration: 'Ongoing',
    description:
      'Contributing to the BIS Safety software project as a Full-Stack Web Developer.',
    technologies: ['React', 'Bootstrap', 'Angular JS', 'ColdFusion'],
  },
  {
    title: 'Self Projects & Learning Experience',
    company: 'Independent',
    duration: 'Ongoing',
    description:
      'Built multiple hands‑on projects to explore React, Tailwind, APIs, and basic backend concepts.',
    technologies: ['React', 'Tailwind CSS', 'ColdFusion'],
  },
  {
    title: 'Frontend Practice & UI Clones',
    company: 'Personal Practice',
    duration: 'Recent Months',
    description:
      'Cloned popular UI layouts and dashboards to improve layout skills, responsiveness, and attention to detail.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

export function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <motion.div
        className="space-y-6"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Experience
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-textPrimary sm:text-3xl">
            How I&apos;ve been growing as a developer.
          </h2>
          <p className="text-sm text-textMuted sm:text-base">
            I bring 2 years of hands-on experience in full-stack web development, delivering real-world projects with modern technologies.
          </p>
        </div>

        <ol className="relative border-l border-accentMuted/60 pl-5">
          {experiences.map((exp, index) => (
            <li key={exp.title} className="mb-8 last:mb-0">
              <motion.div
                className="relative ml-2 rounded-xl border border-stone-300/20 bg-blue-500/10 p-4 shadow-sm shadow-black/30 backdrop-blur"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.35, ease: 'easeOut' }}
              >
                <span className="absolute -left-7 top-3 h-3 w-3 rounded-full border border-accent bg-background" />
                <h3 className="text-sm font-semibold text-textPrimary">
                  {exp.title}
                </h3>
                <p className="mt-0.5 text-xs text-textMuted/80">
                  {exp.company} • {exp.duration}
                </p>
                <p className="mt-2 text-sm text-textMuted">{exp.description}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accentMuted/40 px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}

export default Experience;



