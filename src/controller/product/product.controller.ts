import {Controller, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import {ProductService} from '../../service/product.service';
import {Product} from '../../types/migros-product.type';

@Controller('product')
export class ProductController {

	constructor(private productService: ProductService) {
	}

	@Get('/:id')
	public async getProductInformation(@Param() params) {

		return await this.productService.getProduct(params.id);
	}

	@Post('upload')
	@UseInterceptors(FileInterceptor('file'))
	async uploadFile(@UploadedFile() file) {
		console.log(file);
		return [await this.productService.getProduct('120215100000')];
	}
}
