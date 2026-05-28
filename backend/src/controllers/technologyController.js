const { TechnologyService } = require('../services/technologyService');
const ApiResponse = require('../utils/response');

class TechnologyController {
  constructor() {
    this.technologyService = new TechnologyService();
  }

  async getAllTechnologies(req, res) {
    try {
      const query = {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
        sort: req.query.sort || 'name',
        order: req.query.order || 'asc',
        search: req.query.search,
        category: req.query.category,
        difficulty: req.query.difficulty,
      };

      const technologies = await this.technologyService.getAllTechnologies(query);
      
      // Pagination logic
      const page = query.page || 1;
      const limit = query.limit || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedTechnologies = technologies.slice(startIndex, endIndex);

      ApiResponse.paginated(
        res,
        paginatedTechnologies,
        page,
        limit,
        technologies.length,
        'Technologies retrieved successfully'
      );
    } catch (error) {
      console.error('Error in getAllTechnologies:', error);
      ApiResponse.error(res, 'Failed to retrieve technologies', 500);
    }
  }

  async getTechnologyById(req, res) {
    try {
      const { id } = req.params;
      const technology = await this.technologyService.getTechnologyById(id);

      if (!technology) {
        ApiResponse.notFound(res, 'Technology not found');
        return;
      }

      ApiResponse.success(res, technology, 'Technology retrieved successfully');
    } catch (error) {
      console.error('Error in getTechnologyById:', error);
      ApiResponse.error(res, 'Failed to retrieve technology', 500);
    }
  }

  async getTechnologiesByCategory(req, res) {
    try {
      const { category } = req.params;
      const technologies = await this.technologyService.getTechnologiesByCategory(category);

      if (technologies.length === 0) {
        ApiResponse.notFound(res, 'No technologies found in this category');
        return;
      }

      ApiResponse.success(res, technologies, 'Technologies retrieved successfully');
    } catch (error) {
      console.error('Error in getTechnologiesByCategory:', error);
      ApiResponse.error(res, 'Failed to retrieve technologies by category', 500);
    }
  }

  async getCategories(req, res) {
    try {
      const categories = await this.technologyService.getCategories();
      ApiResponse.success(res, categories, 'Categories retrieved successfully');
    } catch (error) {
      console.error('Error in getCategories:', error);
      ApiResponse.error(res, 'Failed to retrieve categories', 500);
    }
  }

  async searchTechnologies(req, res) {
    try {
      const { q } = req.query;
      
      if (!q || typeof q !== 'string') {
        ApiResponse.badRequest(res, 'Search query is required');
        return;
      }

      const technologies = await this.technologyService.searchTechnologies(q);
      ApiResponse.success(res, technologies, 'Search results retrieved successfully');
    } catch (error) {
      console.error('Error in searchTechnologies:', error);
      ApiResponse.error(res, 'Failed to search technologies', 500);
    }
  }

  async getRelatedTechnologies(req, res) {
    try {
      const { id } = req.params;
      const technologies = await this.technologyService.getRelatedTechnologies(id);

      if (technologies.length === 0) {
        ApiResponse.notFound(res, 'No related technologies found');
        return;
      }

      ApiResponse.success(res, technologies, 'Related technologies retrieved successfully');
    } catch (error) {
      console.error('Error in getRelatedTechnologies:', error);
      ApiResponse.error(res, 'Failed to retrieve related technologies', 500);
    }
  }
}

module.exports = TechnologyController;
