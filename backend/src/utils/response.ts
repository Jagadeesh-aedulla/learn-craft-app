import { Response } from 'express';
import { ApiResponse, PaginatedResponse, ErrorResponse } from '../types';

export class ResponseHelper {
  static success<T>(res: Response, data: T, message?: string): Response<ApiResponse<T>> {
    return res.status(200).json({
      success: true,
      data,
      message,
      timestamp: new Date().toISOString(),
    });
  }

  static created<T>(res: Response, data: T, message?: string): Response<ApiResponse<T>> {
    return res.status(201).json({
      success: true,
      data,
      message,
      timestamp: new Date().toISOString(),
    });
  }

  static error(res: Response, error: string, statusCode: number = 500, message?: string): Response<ErrorResponse> {
    return res.status(statusCode).json({
      success: false,
      error,
      message,
      timestamp: new Date().toISOString(),
      ...(process.env.NODE_ENV === 'development' && { stack: new Error(error).stack }),
    });
  }

  static badRequest(res: Response, message: string): Response<ErrorResponse> {
    return this.error(res, 'Bad Request', 400, message);
  }

  static notFound(res: Response, message: string = 'Resource not found'): Response<ErrorResponse> {
    return this.error(res, 'Not Found', 404, message);
  }

  static unauthorized(res: Response, message: string = 'Unauthorized'): Response<ErrorResponse> {
    return this.error(res, 'Unauthorized', 401, message);
  }

  static forbidden(res: Response, message: string = 'Forbidden'): Response<ErrorResponse> {
    return this.error(res, 'Forbidden', 403, message);
  }

  static conflict(res: Response, message: string = 'Conflict'): Response<ErrorResponse> {
    return this.error(res, 'Conflict', 409, message);
  }

  static paginated<T>(
    res: Response,
    data: T[],
    page: number,
    limit: number,
    total: number,
    message?: string
  ): Response<PaginatedResponse<T>> {
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
}
