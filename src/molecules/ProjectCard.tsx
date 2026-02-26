import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types";
import { Tag } from "@/atoms/Tag";
import { useUIStore } from "@/store/useUIStore";

interface ProjectCardProps {
  readonly project: Project;
  readonly className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = "",
}) => {
  const openDetail = useUIStore((s) => s.openDetail);

  return (
    <motion.article
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      onClick={() => openDetail(project)}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={project.coverImage}
          alt={project.coverAlt}
          loading="lazy"
          className="w-full h-full object-cover"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.06 },
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      {/* Persistent dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-roxana-bg via-roxana-bg/40 to-transparent" />

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-roxana-surface/70"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 min-h-[260px]">
        {/* Category tag always visible */}
        <motion.div variants={{ rest: { opacity: 1 }, hover: { opacity: 1 } }}>
          <Tag className="mb-3">{project.category}</Tag>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="font-serif font-thin italic text-xl text-white tracking-wide leading-tight"
          variants={{
            rest: { y: 8, opacity: 0.85 },
            hover: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.35 }}
        >
          {project.title}
        </motion.h3>

        {/* Year + Arrow */}
        <AnimatePresence>
          <motion.div
            className="flex items-center justify-between mt-2"
            variants={{
              rest: { opacity: 0, y: 8 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <span className="font-sans text-xs text-roxana-muted tracking-widest">
              {project.year}
            </span>
            <span className="text-roxana-highlight text-lg font-thin">→</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.article>
  );
};
