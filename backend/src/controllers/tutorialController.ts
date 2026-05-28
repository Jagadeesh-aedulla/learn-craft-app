import { Request, Response } from 'express';
import { TutorialService } from '../services/tutorialService';
import { ResponseHelper } from '../utils/response';
import { QueryParams } from '../types';

export class TutorialController {
  private tutorialService: TutorialService;

  constructor() {
    this.tutorialService = TutorialService.getInstance();
  }

  public async getAllTutorials(req: Request, res: Response): Promise<void> {
    try {
      const query: QueryParams = {
        page: parseInt(req.query.page as string) || 1,
        limit: parseInt(req.query.limit as string) || 10,
        sort: req.query.sort as string || 'title',
        order: (req.query.order as 'asc' | 'desc') || 'asc',
        search: req.query.search as string,
        difficulty: req.query.difficulty as string,
      };

      const tutorials = await this.tutorialService.getAllTutorials(query);
      
      // Pagination logic
      const page = query.page || 1;
      const limit = query.limit || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedTutorials = tutorials.slice(startIndex, endIndex);

      ResponseHelper.paginated(
        res,
        paginatedTutorials,
        page,
        limit,
        tutorials.length,
        'Tutorials retrieved successfully'
      );
    } catch (error) {
      console.error('Error in getAllTutorials:', error);
      ResponseHelper.error(res, 'Failed to retrieve tutorials', 500);
    }
  }

  public async getTutorialById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const tutorial = await this.tutorialService.getTutorialById(id);

      if (!tutorial) {
        ResponseHelper.notFound(res, 'Tutorial not found');
        return;
      }

      ResponseHelper.success(res, tutorial, 'Tutorial retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialById:', error);
      ResponseHelper.error(res, 'Failed to retrieve tutorial', 500);
    }
  }

  public async getTutorialByTechnologyId(req: Request, res: Response): Promise<void> {
    try {
      const { technologyId } = req.params;
      const tutorial = await this.tutorialService.getTutorialByTechnologyId(technologyId);

      if (!tutorial) {
        ResponseHelper.notFound(res, 'Tutorial not found for this technology');
        return;
      }

      ResponseHelper.success(res, tutorial, 'Tutorial retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialByTechnologyId:', error);
      ResponseHelper.error(res, 'Failed to retrieve tutorial', 500);
    }
  }

  public async getTutorialSections(req: Request, res: Response): Promise<void> {
    try {
      const { tutorialId } = req.params;
      const sections = await this.tutorialService.getTutorialSections(tutorialId);

      if (sections.length === 0) {
        ResponseHelper.notFound(res, 'No sections found for this tutorial');
        return;
      }

      ResponseHelper.success(res, sections, 'Tutorial sections retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialSections:', error);
      ResponseHelper.error(res, 'Failed to retrieve tutorial sections', 500);
    }
  }

  public async getTutorialLessons(req: Request, res: Response): Promise<void> {
    try {
      const { tutorialId } = req.params;
      const { sectionId } = req.query;
      
      const lessons = await this.tutorialService.getTutorialLessons(
        tutorialId, 
        sectionId as string
      );

      if (lessons.length === 0) {
        ResponseHelper.notFound(res, 'No lessons found for this tutorial/section');
        return;
      }

      ResponseHelper.success(res, lessons, 'Tutorial lessons retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialLessons:', error);
      ResponseHelper.error(res, 'Failed to retrieve tutorial lessons', 500);
    }
  }

  public async getLesson(req: Request, res: Response): Promise<void> {
    try {
      const { tutorialId, sectionId, lessonId } = req.params;
      
      const lesson = await this.tutorialService.getLesson(tutorialId, sectionId, lessonId);

      if (!lesson) {
        ResponseHelper.notFound(res, 'Lesson not found');
        return;
      }

      ResponseHelper.success(res, lesson, 'Lesson retrieved successfully');
    } catch (error) {
      console.error('Error in getLesson:', error);
      ResponseHelper.error(res, 'Failed to retrieve lesson', 500);
    }
  }

  public async getTutorialsByDifficulty(req: Request, res: Response): Promise<void> {
    try {
      const { difficulty } = req.params;
      const tutorials = await this.tutorialService.getTutorialsByDifficulty(difficulty);

      if (tutorials.length === 0) {
        ResponseHelper.notFound(res, 'No tutorials found for this difficulty level');
        return;
      }

      ResponseHelper.success(res, tutorials, 'Tutorials retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialsByDifficulty:', error);
      ResponseHelper.error(res, 'Failed to retrieve tutorials by difficulty', 500);
    }
  }

  public async searchTutorials(req: Request, res: Response): Promise<void> {
    try {
      const { q } = req.query;
      
      if (!q || typeof q !== 'string') {
        ResponseHelper.badRequest(res, 'Search query is required');
        return;
      }

      const tutorials = await this.tutorialService.searchTutorials(q);
      ResponseHelper.success(res, tutorials, 'Search results retrieved successfully');
    } catch (error) {
      console.error('Error in searchTutorials:', error);
      ResponseHelper.error(res, 'Failed to search tutorials', 500);
    }
  }

  public async getTutorialStats(req: Request, res: Response): Promise<void> {
    try {
      const stats = await this.tutorialService.getTutorialStats();
      ResponseHelper.success(res, stats, 'Tutorial statistics retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialStats:', error);
      ResponseHelper.error(res, 'Failed to retrieve tutorial statistics', 500);
    }
  }
}
