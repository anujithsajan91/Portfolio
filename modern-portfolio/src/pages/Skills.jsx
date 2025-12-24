import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { SkillCard } from '../components/SkillCard';

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export function Skills() {
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
            Skills
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-textPrimary sm:text-3xl">
            Technologies I work with.
          </h2>
          <p className="text-sm text-textMuted sm:text-base">
            A mix of frontend, backend, database, and tooling skills I&apos;ve used
            while building projects and learning the craft.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              category={skill.category}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;



