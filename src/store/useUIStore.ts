import type { UIState, Project } from "@/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUIStore = create<UIState>()(
  devtools(
    (set) => ({
      selectedProject: null,
      isDetailOpen: false,
      isNavScrolled: false,

      openDetail: (project: Project) => {
        set({ selectedProject: project, isDetailOpen: true });
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
