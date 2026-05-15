export interface Project {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Skills {
  [category: string]: string[];
}

function parseJson<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const projects: Project[] = parseJson<Project[]>(
  process.env.NEXT_PUBLIC_PROJECTS,
  []
);

export const experience: Experience[] = parseJson<Experience[]>(
  process.env.NEXT_PUBLIC_EXPERIENCE,
  []
);

export const skills: Skills = parseJson<Skills>(
  process.env.NEXT_PUBLIC_SKILLS,
  {}
);
