import {HttpModule, Module} from '@nestjs/common';
import {ProductController} from './controller/product/product.controller';
import {ProductService} from './service/product.service';
import {PredictionService} from './service/prediction.service';
import {TextToSpeechService} from "./service/text-to-speech.service";

@Module({
    imports: [HttpModule.registerAsync({
        useFactory: () => ({
            timeout: 60000,
        }),
    }),
    ],
    controllers: [ProductController],
    providers: [ProductService, PredictionService, TextToSpeechService],
})
export class AppModule {
}
