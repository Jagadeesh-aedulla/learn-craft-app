const ApiResponse = require('../utils/response');
const logger = require('../utils/logger');

const errorHandler = (
  err,
  req,
  res,
  next
) => {
  let error = { ...err };
  error.message = err.message;

  // Log error
  logger.error(err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = { name: 'CastError', message, statusCode: 404, isOperational: true };
  }

  // Mongoose duplicate key
  if (err.name === 'MongoError' && err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = { name: 'MongoError', message, statusCode: 400, isOperational: true };
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = { name: 'ValidationError', message, statusCode: 400, isOperational: true };
  }

  // JWT error
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid token';
    error = { name: 'JsonWebTokenError', message, statusCode: 401, isOperational: true };
  }

  // JWT expired error
  if (err.name === 'TokenExpiredError') {
    const message = 'Token expired';
    error = { name: 'TokenExpiredError', message, statusCode: 401, isOperational: true };
  }

  ApiResponse.error(
    res,
    error.message || 'Internal Server Error',
    error.statusCode || 500
  );
};

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  error.isOperational = true;
  next(error);
};

module.exports = {
  errorHandler,
  notFound
};
