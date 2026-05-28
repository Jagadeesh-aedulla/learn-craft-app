const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const config = require('./config');
const { errorHandler, notFound } = require('./middleware/errorHandler');
const { requestLogger } = require('./middleware/requestLogger');
const technologyRoutes = require('./routes/technologyRoutes');
const tutorialRoutes = require('./routes/tutorialRoutes');

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: config.corsOrigin,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  message: config.rateLimit.message,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// General middleware
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
app.use(morgan(config.logging.format));
app.use(requestLogger);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'LearnCraftAI Backend API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: config.nodeEnv,
  });
});

// API routes
const apiPrefix = `${config.api.prefix}/${config.api.version}`;

app.use(`${apiPrefix}/technologies`, technologyRoutes);
app.use(`${apiPrefix}/tutorials`, tutorialRoutes);

// API documentation endpoint
app.get(`${apiPrefix}/docs`, (req, res) => {
  res.json({
    success: true,
    message: 'LearnCraftAI API Documentation',
    version: '1.0.0',
    endpoints: {
      technologies: {
        base: `${apiPrefix}/technologies`,
        methods: ['GET'],
        available: [
          'GET / - Get all technologies',
          'GET /categories - Get all categories',
          'GET /search?q=query - Search technologies',
          'GET /category/:category - Get technologies by category',
          'GET /:id - Get technology by ID',
          'GET /:id/related - Get related technologies',
        ],
      },
      tutorials: {
        base: `${apiPrefix}/tutorials`,
        methods: ['GET'],
        available: [
          'GET / - Get all tutorials',
          'GET /stats - Get tutorial statistics',
          'GET /search?q=query - Search tutorials',
          'GET /difficulty/:difficulty - Get tutorials by difficulty',
          'GET /technology/:technologyId - Get tutorial by technology ID',
          'GET /:id - Get tutorial by ID',
          'GET /:tutorialId/sections - Get tutorial sections',
          'GET /:tutorialId/lessons - Get tutorial lessons',
          'GET /:tutorialId/sections/:sectionId/lessons/:lessonId - Get specific lesson',
        ],
      },
    },
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
