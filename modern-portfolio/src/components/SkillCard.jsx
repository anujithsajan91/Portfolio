import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.05, duration: 0.35, ease: 'easeOut' },
  }),
};

export function SkillCard({ icon: Icon, name, level, category, index }) {
  return (
    <motion.div
      className="flex flex-col gap-2 rounded-xl border border-stone-300/20 bg-blue-500/10 p-4 hover:bg-blue-500/20 shadow-sm shadow-black/30 backdrop-blur p-4 shadow-sm shadow-black/40"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {Icon && (
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accentMuted/50 text-accent">
              <Icon className="h-5 w-5" />
            </span>
          )}
          <div>
            <h3 className="text-sm font-semibold text-textPrimary">{name}</h3>
            {category && (
              <p className="text-xs uppercase tracking-wide text-textMuted/80">
                {category}
              </p>
            )}
          </div>
        </div>
        {level && (
          <span className="rounded-full bg-accentMuted/60 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-accent">
            {level}
          </span>
        )}
      </div>
      {level && (
        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-accentMuted/40">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent to-accentSoft"
            style={{ width: level }}
          />
        </div>
      )}
    </motion.div>
  );
}

export default SkillCard;



