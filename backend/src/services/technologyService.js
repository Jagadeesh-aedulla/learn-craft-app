const { technologies } = require('../data/technologies');

class TechnologyService {
  constructor() {
    if (!TechnologyService.instance) {
      TechnologyService.instance = new TechnologyService();
    }
    return TechnologyService.instance;
  }

  async getAllTechnologies(query) {
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
        const aValue = a[query.sort];
        const bValue = b[query.sort];
        
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

  async getTechnologyById(id) {
    return technologies.find(tech => tech.id === id) || null;
  }

  async getTechnologiesByCategory(category) {
    return technologies.filter(tech => tech.category === category);
  }

  async getCategories() {
    const categories = [...new Set(technologies.map(tech => tech.category))];
    return categories;
  }

  async searchTechnologies(query) {
    const searchTerm = query.toLowerCase();
    return technologies.filter(
      tech =>
        tech.name.toLowerCase().includes(searchTerm) ||
        tech.description.toLowerCase().includes(searchTerm) ||
        tech.topics.some(topic => topic.toLowerCase().includes(searchTerm))
    );
  }

  async getRelatedTechnologies(technologyId) {
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

module.exports = TechnologyService;
