import { Technology, QueryParams } from '../types';
import { technologies } from '../../data/technologies';

export class TechnologyService {
  private static instance: TechnologyService;

  private constructor() {}

  public static getInstance(): TechnologyService {
    if (!TechnologyService.instance) {
      TechnologyService.instance = new TechnologyService();
    }
    return TechnologyService.instance;
  }

  public async getAllTechnologies(query?: QueryParams): Promise<Technology[]> {
    let filteredTechnologies = [...technologies];

    // Filter by category
    if (query?.category) {
      filteredTechnologies = filteredTechnologies.filter(
        tech => tech.category === query.category
      );
    }

    // Search functionality
    if (query?.search) {
      const searchTerm = query.search.toLowerCase();
      filteredTechnologies = filteredTechnologies.filter(
        tech =>
          tech.name.toLowerCase().includes(searchTerm) ||
          tech.description.toLowerCase().includes(searchTerm) ||
          tech.topics.some(topic => topic.toLowerCase().includes(searchTerm))
      );
    }

    // Sorting
    if (query?.sort) {
      filteredTechnologies.sort((a, b) => {
        const aValue = a[query.sort as keyof Technology];
        const bValue = b[query.sort as keyof Technology];
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return query.order === 'desc' 
            ? bValue.localeCompare(aValue)
            : aValue.localeCompare(bValue);
        }
        
        return 0;
      });
    }

    return filteredTechnologies;
  }

  public async getTechnologyById(id: string): Promise<Technology | null> {
    return technologies.find(tech => tech.id === id) || null;
  }

  public async getTechnologiesByCategory(category: string): Promise<Technology[]> {
    return technologies.filter(tech => tech.category === category);
  }

  public async getCategories(): Promise<string[]> {
    const categories = [...new Set(technologies.map(tech => tech.category))];
    return categories;
  }

  public async searchTechnologies(query: string): Promise<Technology[]> {
    const searchTerm = query.toLowerCase();
    return technologies.filter(
      tech =>
        tech.name.toLowerCase().includes(searchTerm) ||
        tech.description.toLowerCase().includes(searchTerm) ||
        tech.topics.some(topic => topic.toLowerCase().includes(searchTerm))
    );
  }

  public async getRelatedTechnologies(technologyId: string): Promise<Technology[]> {
    const technology = await this.getTechnologyById(technologyId);
    if (!technology) return [];

    // Find technologies in the same category
    const sameCategory = technologies.filter(
      tech => tech.category === technology.category && tech.id !== technologyId
    );

    // Limit to 5 related technologies
    return sameCategory.slice(0, 5);
  }
}
