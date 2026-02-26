// ─── Domain Types ───────────────────────────────────────────────────────────

export type Category =
  | "Todos"
  | "Identidad Visual"
  | "Motion"
  | "Editorial"
  | "Fotografía"
  | "Web";

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Category;
  year: number;
  client: string;
  services: string[];
  description: string;
  coverImage: string;
  coverAlt: string;
  images: ProjectImage[];
  tags: string[];
  featured: boolean;
  siteUrl?: string;
}

// ─── API / Service Layer Types ────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
}

// ─── Store State Types ────────────────────────────────────────────────────────

export interface GalleryState {
  projects: Project[];
  filteredProjects: Project[];
  activeFilter: Category;
  isLoading: boolean;
  error: string | null;
  // Actions
  fetchProjects: () => Promise<void>;
  setFilter: (category: Category) => void;
}

export interface UIState {
  selectedProject: Project | null;
  isDetailOpen: boolean;
  isNavScrolled: boolean;
  // Actions
  openDetail: (project: Project) => void;
  closeDetail: () => void;
  setNavScrolled: (scrolled: boolean) => void;
}

// ─── Component Prop Types ─────────────────────────────────────────────────────

export type ButtonVariant = "primary" | "outline" | "ghost";
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
