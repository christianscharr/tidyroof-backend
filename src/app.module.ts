import {HttpModule, Module} from '@nestjs/common';
import {ProductController} from './controller/product/product.controller';
import {ProductService} from './service/product.service';
import {PredictionService} from './service/prediction.service';

@Module({
    imports: [HttpModule.registerAsync({
        useFactory: () => ({
            timeout: 30000,
        }),
    }),
    ],
    controllers: [ProductController],
    providers: [ProductService, PredictionService],
})
export class AppModule {
}
