import { Router } from 'express';
import { TechnologyController } from '../controllers/technologyController';

const router = Router();
const technologyController = new TechnologyController();

// GET /api/v1/technologies - Get all technologies with pagination and filtering
router.get('/', technologyController.getAllTechnologies.bind(technologyController));

// GET /api/v1/technologies/categories - Get all categories
router.get('/categories', technologyController.getCategories.bind(technologyController));

// GET /api/v1/technologies/search - Search technologies
router.get('/search', technologyController.searchTechnologies.bind(technologyController));

// GET /api/v1/technologies/category/:category - Get technologies by category
router.get('/category/:category', technologyController.getTechnologiesByCategory.bind(technologyController));

// GET /api/v1/technologies/:id - Get technology by ID
router.get('/:id', technologyController.getTechnologyById.bind(technologyController));

// GET /api/v1/technologies/:id/related - Get related technologies
router.get('/:id/related', technologyController.getRelatedTechnologies.bind(technologyController));

export default router;
