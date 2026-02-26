import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { UIState, Project } from "@/types";

export const useUIStore = create<UIState>()(
  devtools(
    (set) => ({
      // ─── Initial State ──────────────────────────────────────────────────
      selectedProject: null,
      isDetailOpen: false,
      isNavScrolled: false,

      // ─── Actions ────────────────────────────────────────────────────────

      openDetail: (project: Project) => {
        set({ selectedProject: project, isDetailOpen: true });
        // Prevent background scroll
        document.body.style.overflow = "hidden";
      },

      closeDetail: () => {
        set({ selectedProject: null, isDetailOpen: false });
        document.body.style.overflow = "";
      },

      setNavScrolled: (scrolled: boolean) => {
        set({ isNavScrolled: scrolled });
      },
    }),
    { name: "UIStore" },
  ),
);
