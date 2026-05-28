const TutorialService = require('../services/tutorialService');
const ApiResponse = require('../utils/response');

class TutorialController {
  constructor() {
    this.tutorialService = new TutorialService();
  }

  async getAllTutorials(req, res) {
    try {
      const query = {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
        sort: req.query.sort || 'title',
        order: req.query.order || 'asc',
        search: req.query.search,
        difficulty: req.query.difficulty,
      };

      const tutorials = await this.tutorialService.getAllTutorials(query);
      
      // Pagination logic
      const page = query.page || 1;
      const limit = query.limit || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedTutorials = tutorials.slice(startIndex, endIndex);

      ApiResponse.paginated(
        res,
        paginatedTutorials,
        page,
        limit,
        tutorials.length,
        'Tutorials retrieved successfully'
      );
    } catch (error) {
      console.error('Error in getAllTutorials:', error);
      ApiResponse.error(res, 'Failed to retrieve tutorials', 500);
    }
  }

  async getTutorialById(req, res) {
    try {
      const { id } = req.params;
      const tutorial = await this.tutorialService.getTutorialById(id);

      if (!tutorial) {
        ApiResponse.notFound(res, 'Tutorial not found');
        return;
      }

      ApiResponse.success(res, tutorial, 'Tutorial retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialById:', error);
      ApiResponse.error(res, 'Failed to retrieve tutorial', 500);
    }
  }

  async getTutorialByTechnologyId(req, res) {
    try {
      const { technologyId } = req.params;
      const tutorial = await this.tutorialService.getTutorialByTechnologyId(technologyId);

      if (!tutorial) {
        ApiResponse.notFound(res, 'Tutorial not found for this technology');
        return;
      }

      ApiResponse.success(res, tutorial, 'Tutorial retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialByTechnologyId:', error);
      ApiResponse.error(res, 'Failed to retrieve tutorial', 500);
    }
  }

  async getTutorialSections(req, res) {
    try {
      const { tutorialId } = req.params;
      const sections = await this.tutorialService.getTutorialSections(tutorialId);

      if (sections.length === 0) {
        ApiResponse.notFound(res, 'No sections found for this tutorial');
        return;
      }

      ApiResponse.success(res, sections, 'Tutorial sections retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialSections:', error);
      ApiResponse.error(res, 'Failed to retrieve tutorial sections', 500);
    }
  }

  async getTutorialLessons(req, res) {
    try {
      const { tutorialId } = req.params;
      const { sectionId } = req.query;
      
      const lessons = await this.tutorialService.getTutorialLessons(
        tutorialId, 
        sectionId
      );

      if (lessons.length === 0) {
        ApiResponse.notFound(res, 'No lessons found for this tutorial/section');
        return;
      }

      ApiResponse.success(res, lessons, 'Tutorial lessons retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialLessons:', error);
      ApiResponse.error(res, 'Failed to retrieve tutorial lessons', 500);
    }
  }

  async getLesson(req, res) {
    try {
      const { tutorialId, sectionId, lessonId } = req.params;
      
      const lesson = await this.tutorialService.getLesson(tutorialId, sectionId, lessonId);

      if (!lesson) {
        ApiResponse.notFound(res, 'Lesson not found');
        return;
      }

      ApiResponse.success(res, lesson, 'Lesson retrieved successfully');
    } catch (error) {
      console.error('Error in getLesson:', error);
      ApiResponse.error(res, 'Failed to retrieve lesson', 500);
    }
  }

  async getTutorialsByDifficulty(req, res) {
    try {
      const { difficulty } = req.params;
      const tutorials = await this.tutorialService.getTutorialsByDifficulty(difficulty);

      if (tutorials.length === 0) {
        ApiResponse.notFound(res, 'No tutorials found for this difficulty level');
        return;
      }

      ApiResponse.success(res, tutorials, 'Tutorials retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialsByDifficulty:', error);
      ApiResponse.error(res, 'Failed to retrieve tutorials by difficulty', 500);
    }
  }

  async searchTutorials(req, res) {
    try {
      const { q } = req.query;
      
      if (!q || typeof q !== 'string') {
        ApiResponse.badRequest(res, 'Search query is required');
        return;
      }

      const tutorials = await this.tutorialService.searchTutorials(q);
      ApiResponse.success(res, tutorials, 'Search results retrieved successfully');
    } catch (error) {
      console.error('Error in searchTutorials:', error);
      ApiResponse.error(res, 'Failed to search tutorials', 500);
    }
  }

  async getTutorialStats(req, res) {
    try {
      const stats = await this.tutorialService.getTutorialStats();
      ApiResponse.success(res, stats, 'Tutorial statistics retrieved successfully');
    } catch (error) {
      console.error('Error in getTutorialStats:', error);
      ApiResponse.error(res, 'Failed to retrieve tutorial statistics', 500);
    }
  }
}

module.exports = TutorialController;
