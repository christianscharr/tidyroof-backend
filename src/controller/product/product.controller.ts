import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from '../../service/product.service';
import { PredictionService } from '../../service/prediction.service';

@Controller('product')
export class ProductController {

  constructor(private productService: ProductService,
              private predictionService: PredictionService) {
  }

  @Get('/:id')
  public async getProductInformation(@Param() params) {
    return await this.productService.getProduct(params.id);
  }


  @Post('/recommended')
  public async getRecommendedProducts(@Body() body) {
    return await this.productService.getRecommendedProducts(body.id, body.allergens);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    console.log(file);
    this.predictionService.getPrediction(file);
    return [await this.productService.getProduct('120215100000')];
  }
}
