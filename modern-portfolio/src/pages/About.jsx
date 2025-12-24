import { motion } from 'framer-motion';
import homeImg from "@/assets/images/Anujith_Home.png";
import { Link } from 'react-router-dom';
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

export function About() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 h-full">
        <motion.div
          className="space-y-8 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start md:gap-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                About Me
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-textPrimary sm:text-3xl">
                A developer focused on building clean, usable interfaces.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-textMuted sm:text-base">
              I&apos;m a full-stack developer with hands-on experience using ColdFusion on the backend and React along with basic Angular on the frontend. I enjoy building complete web solutions—from designing efficient server-side logic to crafting responsive, user-friendly interfaces with modern JavaScript frameworks.
            </p>
            <p className="text-sm leading-relaxed text-textMuted sm:text-base">
              As a fresher, I&apos;ve been sharpening my skills through self‑driven
              projects, online resources, and continuous experimentation. My goal
              is to join a team where I can contribute to real‑world products
              while learning from experienced engineers.
            </p>
            <div className="rounded-xl border border-stone-300/20 bg-blue-500/10 hover:bg-blue-500/20 p-4 shadow-sm shadow-black/30 backdrop-blur p-4 text-sm text-textMuted">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Journey Snapshot
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium text-textPrimary">Education:</span>{' '}
                  Diploma in Computer Engineering (2021-2024)
                  <br />
                  <small className="text-textMuted/90">Model Polytechnic college, Karunagappally</small>
                </li>
                <li>
                  <span className="font-medium text-textPrimary">Self‑learning:</span>{' '}
                  Completed multiple React and frontend courses, built
                  hands‑on projects, and explored backend basics with Node and
                  ColdFusion.
                </li>
                <li>
                  <span className="font-medium text-textPrimary">Goal:</span> To
                  grow into a strong frontend engineer who can design, build, and
                  maintain modern web interfaces.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 space-y-5 md:mt-0">
            <div className="relative mx-auto h-52 w-52 overflow-hidden rounded-3xl border border-accentMuted/70 bg-gradient-to-tr from-accentMuted/40 via-backgroundSoft to-background shadow-[0_0_40px_rgba(56,189,248,0.35)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={homeImg} alt="" className='absolute top-0' />
              </div>
            </div>
            <div className="rounded-xl border border-stone-300/20 bg-blue-500/10 hover:bg-blue-500/20 p-4 shadow-sm shadow-black/30 backdrop-blur p-4 text-xs text-textMuted">
              <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-textMuted/80">
                Quick Facts
              </p>
              <ul className="space-y-1">
                <li>Based in: <span className="text-textPrimary">Kollam, Kerala</span></li>
                <li>Open to: Internship / Junior Frontend / Graduate roles</li>
                <li>Interests: UI design, Fullstack Dev, performance, and clean code</li>
              </ul>
            </div>
          </div>
        </motion.div>
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
              <li key={exp.title} className="mb-8 last:mb-10">
                <motion.div
                  className="relative ml-2 rounded-xl border border-stone-300/20 bg-blue-500/10 hover:bg-blue-500/20 p-4 shadow-sm shadow-black/30 backdrop-blur"
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
    </>
  );
}

export default About;



