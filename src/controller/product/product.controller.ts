import {Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import {PredictionService} from '../../service/prediction.service';
import {ProductService} from '../../service/product.service';
import {TextToSpeechService} from "../../service/text-to-speech.service";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService,
                private predictionService: PredictionService,
                private textToSpeechService: TextToSpeechService) {
    }

    @Get('/:id')
    public async getProductInformation(@Param() params) {
        return await this.productService.getProduct(params.id);
    }

    @Get('/gtin/:gtin')
    public async getProductInformationByGtin(@Param() params) {
        return await this.productService.getProductByGtin(params.gtin);
    }


    @Post('/recommended')
    public async getRecommendedProducts(@Body() body) {
        return await this.productService.getRecommendedProducts(body.id, body.allergens);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file) {
        const predictions = await this.predictionService.getPrediction(file.buffer);
        return Promise.all(predictions.map(async (prediction) => {
            let product = await this.productService.getProduct(prediction.productId);
            return {audioContent: await this.textToSpeechService.getAudio(product)};
        }));
    }

    @Post('upload/speech')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFileForSpeech(@UploadedFile() file) {
        const predictions = await this.predictionService.getPrediction(file.buffer);
        return Promise.all(predictions.map(async (prediction) => {
            let product = await this.productService.getProduct(prediction.productId);
            return await this.textToSpeechService.getAudio(product);
        }));
    }

}
