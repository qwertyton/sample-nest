import { ArgumentsHost, Catch, ConflictException, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { MongoError } from 'mongodb';


@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const status = this.getHttpStatus(exception)
    const responseMessage = (type: string, message: string) => {
      response.status(status).json({
        statusCode: status,
        errorType: type,
        errorMessage: message
      });
    };
    responseMessage(exception.name, exception.message);
  }
  private getHttpStatus(exception: MongoError): number {
    switch (exception.code) {
      case 11000:
        return HttpStatus.CONFLICT;
    }
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}

