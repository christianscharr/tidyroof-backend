import {HttpModule, Module} from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
