/**
 * Project Service
 *
 * This service provides an abstraction over data fetching for projects.
 * Currently it uses mock data, but every method is structured to be easily
 * swapped for real HTTP requests (e.g., axios.get('/api/projects')) in the future.
 *
 * Pattern to migrate to real API:
 *   Replace `return mockDelay(MOCK_PROJECTS)` with `return api.get<Project[]>('/projects')`
 */

import type {
  Project,
  Category,
  ApiResponse,
  PaginatedResponse,
} from "@/types";
import { MOCK_PROJECTS } from "@/data/mockData";

// ─── Simulate network latency for realistic UX ────────────────────────────────
const mockDelay = <T>(data: T, ms = 400): Promise<ApiResponse<T>> =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          data,
          status: 200,
          message: "OK",
        }),
      ms,
    ),
  );

// ─── Service Methods ──────────────────────────────────────────────────────────

/**
 * Fetch all projects (paginated in the future).
 * TODO: Replace with GET /api/projects
 */
export const getProjects = async (): Promise<PaginatedResponse<Project>> => {
  const response = await mockDelay(MOCK_PROJECTS, 500);
  return {
    ...response,
    data: MOCK_PROJECTS,
    total: MOCK_PROJECTS.length,
    page: 1,
    limit: 50,
  };
};

/**
 * Fetch a single project by its slug.
 * TODO: Replace with GET /api/projects/:slug
 */
export const getProjectBySlug = async (
  slug: string,
): Promise<ApiResponse<Project | null>> => {
  const found = MOCK_PROJECTS.find((p) => p.slug === slug) ?? null;
  return mockDelay(found, 300);
};

/**
 * Fetch projects by category.
 * TODO: Replace with GET /api/projects?category=:category
 */
export const getProjectsByCategory = async (
  category: Category,
): Promise<ApiResponse<Project[]>> => {
  const filtered =
    category === "Todos"
      ? MOCK_PROJECTS
      : MOCK_PROJECTS.filter((p) => p.category === category);
  return mockDelay(filtered, 300);
};

/**
 * Fetch featured projects for the hero section.
 * TODO: Replace with GET /api/projects?featured=true
 */
export const getFeaturedProjects = async (): Promise<
  ApiResponse<Project[]>
> => {
  const featured = MOCK_PROJECTS.filter((p) => p.featured);
  return mockDelay(featured, 300);
};

/**
 * Fetch related projects (same category, excluding current project).
 * TODO: Replace with GET /api/projects/:id/related
 */
export const getRelatedProjects = async (
  project: Project,
  limit = 3,
): Promise<ApiResponse<Project[]>> => {
  const related = MOCK_PROJECTS.filter(
    (p) => p.category === project.category && p.id !== project.id,
  ).slice(0, limit);
  return mockDelay(related, 200);
};
