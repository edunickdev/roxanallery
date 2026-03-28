import { motion } from "framer-motion";
import type { Category } from "@/types";
import { useGalleryStore } from "@/store/useGalleryStore";

interface FilterChipProps {
  readonly category: Category;
}

export const FilterChip: React.FC<FilterChipProps> = ({ category }) => {
  const activeFilter = useGalleryStore((s) => s.activeFilter);
  const setFilter = useGalleryStore((s) => s.setFilter);
  const isActive = activeFilter === category;

  return (
    <motion.button
      onClick={() => setFilter(category)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`
        relative px-5 py-2 font-sans text-xs tracking-widest uppercase
        rounded-sm border transition-colors duration-300 cursor-pointer
        ${
          isActive
            ? "bg-roxana-primary border-roxana-primary text-white"
            : "bg-transparent border-roxana-border text-roxana-muted hover:border-roxana-primary hover:text-roxana-text"
        }
      `}
    >
      {isActive && (
        <motion.span
          layoutId="filterHighlight"
          className="absolute inset-0 bg-roxana-primary rounded-sm"
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        />
      )}
      <span className="relative z-10">{category}</span>
    </motion.button>
  );
};
