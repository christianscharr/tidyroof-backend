import {Controller, Get, Param} from '@nestjs/common';
import {ProductService} from "../../service/product.service";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {
    }

    @Get("/:id")
    public async getProductInformation(@Param() params) {
        return await this.productService.getProduct(params.id);
    }

}
