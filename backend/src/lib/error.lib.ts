class AppError extends Error {
    data: unknown;
    statusCode: number;
    status: string;
    isOperational: boolean;
  
    constructor({ message, data, statusCode }: { message: string; data?: unknown; statusCode: number }) {
      super(message); // Use the message for the Error's built-in functionality
      this.data = data;
      this.message = message;
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true; // Flag to indicate it's an expected error
  
      // Ensure the prototype chain is properly maintained
      Object.setPrototypeOf(this, AppError.prototype);
    }
  }
  
  export default AppError;
  