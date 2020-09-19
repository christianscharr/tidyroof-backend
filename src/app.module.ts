import {HttpModule, Module} from '@nestjs/common';
import {AppController} from './controller/app/app.controller';
import {ProductController} from './controller/product/product.controller';
import {AppService} from "./service/app.service";
import {ProductService} from "./service/product.service";

@Module({
    imports: [HttpModule.registerAsync({
        useFactory: () => ({
            timeout: 30000,
        }),
    })
    ],
    controllers: [AppController, ProductController],
    providers: [AppService, ProductService],
})
export class AppModule {
}
