import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { GalleryState, Category } from "@/types";
import { getProjects } from "@/services/projectService";

export const useGalleryStore = create<GalleryState>()(
  devtools(
    (set, get) => ({
      // ─── Initial State ──────────────────────────────────────────────────
      projects: [],
      filteredProjects: [],
      activeFilter: "Todos",
      isLoading: false,
      error: null,

      // ─── Actions ────────────────────────────────────────────────────────

      fetchProjects: async () => {
        set({ isLoading: true, error: null });
        try {
          const response = await getProjects();
          set({
            projects: response.data,
            filteredProjects: response.data,
            isLoading: false,
          });
        } catch (err) {
          set({
            error:
              err instanceof Error ? err.message : "Error al cargar proyectos",
            isLoading: false,
          });
        }
      },

      setFilter: (category: Category) => {
        const { projects } = get();
        const filtered =
          category === "Todos"
            ? projects
            : projects.filter((p) => p.category === category);
        set({ activeFilter: category, filteredProjects: filtered });
      },
    }),
    { name: "GalleryStore" },
  ),
);
