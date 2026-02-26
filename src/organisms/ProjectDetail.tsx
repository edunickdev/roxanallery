import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/store/useUIStore";
import { getRelatedProjects } from "@/services/projectService";
import type { Project } from "@/types";
import { ImageCarousel } from "@/molecules/ImageCarousel";
import { ProjectCard } from "@/molecules/ProjectCard";
import { Tag } from "@/atoms/Tag";
import { Heading, Body, Eyebrow } from "@/atoms/Typography";
import { Button } from "@/atoms/Button";

export const ProjectDetail: React.FC = () => {
  const { selectedProject, isDetailOpen, closeDetail } = useUIStore();
  const [related, setRelated] = useState<Project[]>([]);

  useEffect(() => {
    if (selectedProject) {
      getRelatedProjects(selectedProject, 3).then((res) =>
        setRelated(res.data),
      );
    }
  }, [selectedProject]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDetail();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeDetail]);

  return (
    <AnimatePresence>
      {isDetailOpen && selectedProject && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-roxana-bg/90 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDetail}
          />

          {/* Detail panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full lg:w-[85%] bg-roxana-bg border-l border-roxana-border z-50 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              ease: [0.25, 0.46, 0.45, 0.94],
              duration: 0.55,
            }}
          >
            {/* Hero image */}
            <div className="relative h-[45vh] overflow-hidden">
              <img
                src={selectedProject.coverImage}
                alt={selectedProject.coverAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-roxana-bg via-roxana-bg/40 to-transparent" />

              {/* Back button */}
              <button
                onClick={closeDetail}
                className="
                  absolute top-6 left-6
                  flex items-center gap-2
                  font-sans text-xs tracking-widest uppercase
                  text-white/70 hover:text-white
                  transition-colors duration-300 cursor-pointer
                "
              >
                ← Volver al Portfolio
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <Heading
                  level="h2"
                  italic
                  className="text-4xl lg:text-5xl text-white"
                >
                  {selectedProject.title}
                </Heading>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 lg:px-16 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
                {/* Main: image carousel */}
                <div>
                  <ImageCarousel images={selectedProject.images} />
                </div>

                {/* Sidebar: metadata */}
                <aside className="lg:border-l lg:border-roxana-primary/30 lg:pl-10 space-y-8">
                  <div>
                    <Eyebrow className="mb-2">Cliente</Eyebrow>
                    <p className="font-sans text-white">
                      {selectedProject.client}
                    </p>
                  </div>

                  <div>
                    <Eyebrow className="mb-2">Año</Eyebrow>
                    <p className="font-sans text-white">
                      {selectedProject.year}
                    </p>
                  </div>

                  <div>
                    <Eyebrow className="mb-2">Servicios</Eyebrow>
                    <ul className="space-y-1">
                      {selectedProject.services.map((service) => (
                        <li key={service} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-roxana-primary flex-shrink-0" />
                          <span className="font-sans text-sm text-white/80">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Eyebrow className="mb-2">Descripción</Eyebrow>
                    <Body className="text-sm leading-relaxed">
                      {selectedProject.description}
                    </Body>
                  </div>

                  {selectedProject.siteUrl && (
                    <Button
                      variant="outline"
                      as="a"
                      href={selectedProject.siteUrl}
                      target="_blank"
                    >
                      Ver Sitio →
                    </Button>
                  )}
                </aside>
              </div>

              {/* Related projects */}
              {related.length > 0 && (
                <div className="mt-20">
                  <Eyebrow className="mb-8">Proyectos Relacionados</Eyebrow>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {related.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        className="h-[220px]"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
