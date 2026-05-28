import { Request, Response } from 'express';
import { TechnologyService } from '../services/technologyService';
import { ResponseHelper } from '../utils/response';
import { QueryParams } from '../types';

export class TechnologyController {
  private technologyService: TechnologyService;

  constructor() {
    this.technologyService = TechnologyService.getInstance();
  }

  public async getAllTechnologies(req: Request, res: Response): Promise<void> {
    try {
      const query: QueryParams = {
        page: parseInt(req.query.page as string) || 1,
        limit: parseInt(req.query.limit as string) || 10,
        sort: req.query.sort as string || 'name',
        order: (req.query.order as 'asc' | 'desc') || 'asc',
        search: req.query.search as string,
        category: req.query.category as string,
        difficulty: req.query.difficulty as string,
      };

      const technologies = await this.technologyService.getAllTechnologies(query);
      
      // Pagination logic
      const page = query.page || 1;
      const limit = query.limit || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedTechnologies = technologies.slice(startIndex, endIndex);

      ResponseHelper.paginated(
        res,
        paginatedTechnologies,
        page,
        limit,
        technologies.length,
        'Technologies retrieved successfully'
      );
    } catch (error) {
      console.error('Error in getAllTechnologies:', error);
      ResponseHelper.error(res, 'Failed to retrieve technologies', 500);
    }
  }

  public async getTechnologyById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const technology = await this.technologyService.getTechnologyById(id);

      if (!technology) {
        ResponseHelper.notFound(res, 'Technology not found');
        return;
      }

      ResponseHelper.success(res, technology, 'Technology retrieved successfully');
    } catch (error) {
      console.error('Error in getTechnologyById:', error);
      ResponseHelper.error(res, 'Failed to retrieve technology', 500);
    }
  }

  public async getTechnologiesByCategory(req: Request, res: Response): Promise<void> {
    try {
      const { category } = req.params;
      const technologies = await this.technologyService.getTechnologiesByCategory(category);

      if (technologies.length === 0) {
        ResponseHelper.notFound(res, 'No technologies found in this category');
        return;
      }

      ResponseHelper.success(res, technologies, 'Technologies retrieved successfully');
    } catch (error) {
      console.error('Error in getTechnologiesByCategory:', error);
      ResponseHelper.error(res, 'Failed to retrieve technologies by category', 500);
    }
  }

  public async getCategories(req: Request, res: Response): Promise<void> {
    try {
      const categories = await this.technologyService.getCategories();
      ResponseHelper.success(res, categories, 'Categories retrieved successfully');
    } catch (error) {
      console.error('Error in getCategories:', error);
      ResponseHelper.error(res, 'Failed to retrieve categories', 500);
    }
  }

  public async searchTechnologies(req: Request, res: Response): Promise<void> {
    try {
      const { q } = req.query;
      
      if (!q || typeof q !== 'string') {
        ResponseHelper.badRequest(res, 'Search query is required');
        return;
      }

      const technologies = await this.technologyService.searchTechnologies(q);
      ResponseHelper.success(res, technologies, 'Search results retrieved successfully');
    } catch (error) {
      console.error('Error in searchTechnologies:', error);
      ResponseHelper.error(res, 'Failed to search technologies', 500);
    }
  }

  public async getRelatedTechnologies(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const technologies = await this.technologyService.getRelatedTechnologies(id);

      if (technologies.length === 0) {
        ResponseHelper.notFound(res, 'No related technologies found');
        return;
      }

      ResponseHelper.success(res, technologies, 'Related technologies retrieved successfully');
    } catch (error) {
      console.error('Error in getRelatedTechnologies:', error);
      ResponseHelper.error(res, 'Failed to retrieve related technologies', 500);
    }
  }
}
