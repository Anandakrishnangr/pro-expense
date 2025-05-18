import { Request, Response, NextFunction } from 'express';

// Define the error type
interface CustomError extends Error {
    statusCode?: number;
    data?: any;
    errors?: { [key: string]: { message: string } };
    status?: string;
}

// Global error handler middleware
function globalErrorHandler(
    err: CustomError, 
    req: Request, 
    res: Response, 
    next: NextFunction
) {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    let data = err.data || {};

    // Log the error name for debugging
    console.log(err.name);

    // Handle validation errors
    if (err.name === 'ValidationError') {
        // Object.values will return an array of error messages
        message = Object.values(err.errors!).map((error) => error.message).join(', ');
        console.error('Validation Errors:', message);
    } else {
        // You can add additional error types or logging here
    }

    // Send the error response
    res.status(statusCode).json({
        status: err.status || 'error',
        message,
        data
    });
}

export default globalErrorHandler;
