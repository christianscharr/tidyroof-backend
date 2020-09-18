import {CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor} from '@nestjs/common';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	private logger = new Logger();

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		this.logger.debug(`Received message controller[${context.getClass().name}.${context.getHandler().name}]. data: [${context.getArgs()}]`);

		const now = Date.now();
		return next
			.handle()
			.pipe(
				tap(() => console.log(`Received message controller[${context.getClass().name}.${context.getHandler().name}]. ${Date.now() - now}ms`)),
			);
	}
}
