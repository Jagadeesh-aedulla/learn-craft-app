const ApiResponse = class {
  static success(res, data, message) {
    return res.status(200).json({
      success: true,
      data,
      message,
      timestamp: new Date().toISOString(),
    });
  }

  static created(res, data, message) {
    return res.status(201).json({
      success: true,
      data,
      message,
      timestamp: new Date().toISOString(),
    });
  }

  static error(res, error, statusCode = 500, message) {
    return res.status(statusCode).json({
      success: false,
      error,
      message,
      timestamp: new Date().toISOString(),
      ...(process.env.NODE_ENV === 'development' && { stack: new Error(error).stack }),
    });
  }

  static badRequest(res, message) {
    return this.error(res, 'Bad Request', 400, message);
  }

  static notFound(res, message = 'Resource not found') {
    return this.error(res, 'Not Found', 404, message);
  }

  static unauthorized(res, message = 'Unauthorized') {
    return this.error(res, 'Unauthorized', 401, message);
  }

  static forbidden(res, message = 'Forbidden') {
    return this.error(res, 'Forbidden', 403, message);
  }

  static conflict(res, message = 'Conflict') {
    return this.error(res, 'Conflict', 409, message);
  }

  static paginated(
    res,
    data,
    page,
    limit,
    total,
    message
  ) {
    const totalPages = Math.ceil(total / limit);
    const hasNext = page < totalPages;
    const hasPrev = page > 1;

    return res.status(200).json({
      success: true,
      data,
      message,
      timestamp: new Date().toISOString(),
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext,
        hasPrev,
      },
    });
  }
};

module.exports = ApiResponse;
