import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger: Logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request: Request = context.switchToHttp().getRequest();
    const { method, url, body, headers } = request;

    // 输出请求类型和请求参数等信息
    this.logger.log(
      `Request {${method.toUpperCase()}, ${url}} ${JSON.stringify(
        body,
      )} ${JSON.stringify(headers)}`,
    );
    return next.handle().pipe(
      tap({
        next: (data: unknown): void => this.logResponse(data, context),
      }),
    );
  }

  // 输出响应日志
  private logResponse(data: unknown, context: ExecutionContext): void {
    const request: Request = context.switchToHttp().getRequest<Request>();
    const response: Response = context.switchToHttp().getResponse<Response>();

    this.logger.log(
      `Response {${response.statusCode}, ${request.method.toUpperCase()}, ${
        request.url
      }} ${JSON.stringify(data)}`,
    );
  }
}
