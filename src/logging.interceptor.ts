import {CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor} from '@nestjs/common';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	private logger = new Logger();

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const req = context.getArgByIndex(0);
		const res = context.getArgByIndex(1);

		this.logger.debug(`Received message controller [${context.getClass().name}.${context.getHandler().name}] | arguments: { path: ${JSON.stringify(req.path)}, params: ${JSON.stringify(req.params)}}`);

		const now = Date.now();
		return next
			.handle()
			.pipe(
				tap((data) => this.logger.debug(`Received message controller [${context.getClass().name}.${context.getHandler().name}] | status: ${res.statusCode} | duration: ${Date.now() - now}ms | { data: ${JSON.stringify(data)} }`)),
				catchError((err) => {
					this.logger.error(`Error thrown in [${context.getClass().name}.${context.getHandler().name}] | ${JSON.stringify(err)}`, err.trace);
					return throwError(err);
				}),
			);
	}
}
