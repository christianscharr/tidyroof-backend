import {HttpService, Injectable} from '@nestjs/common'
import {ProductResponse} from "../types/migros-product-response"
import {Product} from "../types/migros-product.type"
import {mapResponseToProduct} from "./product.mapper";

@Injectable()
export class ProductService {
    cache: { [key: string]: Product } = {};

    constructor(private http: HttpService) {
    }

    async getProduct(id: string): Promise<Product> {
        if (this.cache[id]) {
            return this.cache[id];
        }
        const response = await this.http.get<ProductResponse>('https://hackzurich-api.migros.ch/products/' + id + '?view=browse&custom_image=false', {
            auth: {
                username: "hackzurich2020",
                password: "uhSyJ08KexKn4ZFS",
            },
            headers: {
                'accept': 'application/json',
                'api-version': '7',
                'accept-language': 'de',
            }
        }).toPromise();
        if (response.status !== 200) {
            return null;
        }

        let product = mapResponseToProduct(response.data);
        this.cache[id] = product;
        return product;
    }

    async getRecommendedProducts(id: string, allergens: string[]): Promise<Product[]> {
        const product = await this.getProduct(id);

        const response = await this.http.get<{products: ProductResponse[]}>('https://hackzurich-api.migros.ch/products?' + 'limit=10&offset=0&facet_sort_order=asc&order=asc&region=national&view=browse&custom_image=false', {
            params: {
                q: `${this.getAllergensQuery(allergens)} categories.code:(${product.categories[0].id})`
            },
            auth: {
                username: "hackzurich2020",
                password: "uhSyJ08KexKn4ZFS",
            },
            headers: {
                'accept': 'application/json',
                'api-version': '7',
                'accept-language': 'de',
            }
        }).toPromise();

        return <any>response.data.products;
    }

    private getAllergensQuery(allergens: string[]) {
        if (allergens.length == 0) {
            return ''
        }
        return `allergens.code:(${allergens.map(allergen => 'NOT ' + allergen).join(' AND ')}) AND`;
    }


}
