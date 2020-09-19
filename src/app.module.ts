import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './controller/app/app.controller';
import { ProductController } from './controller/product/product.controller';
import { AppService } from './service/app.service';
import { ProductService } from './service/product.service';
import { PredictionService } from './service/prediction.service';

@Module({
  imports: [HttpModule.registerAsync({
    useFactory: () => ({
      timeout: 10000,
    }),
  }),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, PredictionService],
})
export class AppModule {
}
