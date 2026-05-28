export interface Technology {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  topics: string[];
  link: string;
  category: 'frontend' | 'backend' | 'database' | 'web-tools' | 'data-science' | 'other';
}

export interface Lesson {
  id: string;
  title: string;
  content?: string;
  codeExample?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: number; // in minutes
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
  order: number;
}

export interface TutorialContent {
  id: string;
  technologyId: string;
  title: string;
  description: string;
  sections: Section[];
  totalLessons: number;
  estimatedDuration: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  learningObjectives?: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface QueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
  category?: string;
  difficulty?: string;
}

export interface ErrorResponse {
  success: false;
  error: string;
  message?: string;
  timestamp: string;
  stack?: string; // Only in development
}

export interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}
