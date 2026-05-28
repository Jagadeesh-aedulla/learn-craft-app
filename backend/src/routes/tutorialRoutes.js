const { Router } = require('express');
const { TutorialController } = require('../controllers/tutorialController');

const router = Router();
const tutorialController = new TutorialController();

// GET /api/v1/tutorials - Get all tutorials with pagination and filtering
router.get('/', tutorialController.getAllTutorials.bind(tutorialController));

// GET /api/v1/tutorials/stats - Get tutorial statistics
router.get('/stats', tutorialController.getTutorialStats.bind(tutorialController));

// GET /api/v1/tutorials/search - Search tutorials
router.get('/search', tutorialController.searchTutorials.bind(tutorialController));

// GET /api/v1/tutorials/difficulty/:difficulty - Get tutorials by difficulty
router.get('/difficulty/:difficulty', tutorialController.getTutorialsByDifficulty.bind(tutorialController));

// GET /api/v1/tutorials/technology/:technologyId - Get tutorial by technology ID
router.get('/technology/:technologyId', tutorialController.getTutorialByTechnologyId.bind(tutorialController));

// GET /api/v1/tutorials/:id - Get tutorial by ID
router.get('/:id', tutorialController.getTutorialById.bind(tutorialController));

// GET /api/v1/tutorials/:tutorialId/sections - Get tutorial sections
router.get('/:tutorialId/sections', tutorialController.getTutorialSections.bind(tutorialController));

// GET /api/v1/tutorials/:tutorialId/lessons - Get tutorial lessons (all or by section)
router.get('/:tutorialId/lessons', tutorialController.getTutorialLessons.bind(tutorialController));

// GET /api/v1/tutorials/:tutorialId/sections/:sectionId/lessons/:lessonId - Get specific lesson
router.get('/:tutorialId/sections/:sectionId/lessons/:lessonId', tutorialController.getLesson.bind(tutorialController));

module.exports = router;
