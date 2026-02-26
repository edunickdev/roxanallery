import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGalleryStore } from "@/store/useGalleryStore";
import { CATEGORIES } from "@/data/mockData";
import { ProjectCard } from "@/molecules/ProjectCard";
import { FilterChip } from "@/molecules/FilterChip";
import { Heading, Eyebrow } from "@/atoms/Typography";

export const ProjectGrid: React.FC = () => {
  const { filteredProjects, projects, isLoading, error, fetchProjects } =
    useGalleryStore();

  useEffect(() => {
    if (projects.length === 0) {
      fetchProjects();
    }
  }, [projects.length, fetchProjects]);

  return (
    <section id="trabajo" className="py-28 px-8 lg:px-16 bg-roxana-bg">
      {/* Header */}
      <div className="mb-14">
        <Eyebrow className="mb-4">Portfolio</Eyebrow>
        <div className="flex items-baseline gap-4 flex-wrap">
          <Heading level="h2" className="text-5xl lg:text-6xl text-white">
            Mi{" "}
            <em className="text-roxana-highlight not-italic italic font-thin">
              Trabajo
            </em>
          </Heading>
          {!isLoading && (
            <span className="font-sans text-roxana-muted text-sm tracking-widest">
              ({filteredProjects.length} proyectos)
            </span>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-14">
        {CATEGORIES.map((cat) => (
          <FilterChip key={cat} category={cat} />
        ))}
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-[260px] bg-roxana-surface animate-pulse rounded-sm"
            />
          ))}
        </div>
      )}

      {/* Error state */}
      {error && (
        <p className="font-sans text-center text-red-400 py-12">{error}</p>
      )}

      {/* Asymmetric Gallery Grid */}
      {!isLoading && !error && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`grid-${filteredProjects.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {/* Build rows of staggered cards */}
            {filteredProjects.length === 0 ? (
              <p className="font-sans text-center text-roxana-muted py-16 tracking-widest">
                No hay proyectos en esta categoría.
              </p>
            ) : (
              chunkRows(filteredProjects).map((row, rowIdx) => (
                <motion.div
                  key={rowIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: rowIdx * 0.08 }}
                  className={`flex gap-4 ${rowIdx % 2 === 0 ? "items-start" : "items-end"}`}
                >
                  {row.map((project, colIdx) => {
                    const isWide = row.length === 2 && colIdx === 0;
                    const verticalOffset =
                      row.length === 3
                        ? colIdx === 0
                          ? "-translate-y-8"
                          : colIdx === 2
                            ? "translate-y-6"
                            : ""
                        : "";

                    return (
                      <div
                        key={project.id}
                        className={`
                          ${isWide ? "flex-[1.65]" : "flex-1"}
                          ${verticalOffset}
                        `}
                      >
                        <ProjectCard
                          project={project}
                          className="h-[280px] lg:h-[320px]"
                        />
                      </div>
                    );
                  })}
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

// ─── Helper: split projects into rows of alternating 2/3 ─────────────────────
function chunkRows<T>(items: T[]): T[][] {
  const rows: T[][] = [];
  let i = 0;
  let rowPattern = 0; // 0 = row of 2, 1 = row of 3
  while (i < items.length) {
    const size = rowPattern % 2 === 0 ? 2 : 3;
    rows.push(items.slice(i, i + size));
    i += size;
    rowPattern++;
  }
  return rows;
}
