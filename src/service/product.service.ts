import {HttpService, Injectable, NotFoundException} from '@nestjs/common';
import {ProductResponse} from '../types/migros-product-response';
import {Product} from '../types/migros-product.type';
import {mapResponseToProduct} from './product.mapper';

@Injectable()
export class ProductService {
	productCache: { [key: string]: Product } = {};
    productListCache: { [key: string]: ProductResponse[] } = {};

	constructor(private http: HttpService) {
	}

	async getProduct(id: string): Promise<Product> {
		if (this.productCache[id]) {
			return this.productCache[id];
		}
		const response = await this.http.get<ProductResponse>('https://hackzurich-api.migros.ch/products/' + id + '?view=browse&custom_image=false', {
			auth: {
				username: 'hackzurich2020',
				password: 'uhSyJ08KexKn4ZFS',
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
		this.productCache[id] = product;
		return product;
	}


	async getProductByGtin(gtin: string): Promise<Product> {
		const response = await this.http.get<{ products: ProductResponse[] }>(`https://hackzurich-api.migros.ch/products?limit=10&offset=0&facet_sort_order=asc&sort=score&order=asc&region=national&gtins=${gtin}&view=browse&custom_image=false`, {
			auth: {
				username: 'hackzurich2020',
				password: 'uhSyJ08KexKn4ZFS',
			},
			headers: {
				'accept': 'application/json',
				'api-version': '7',
				'accept-language': 'de',
			}
		}).toPromise();

		console.log(response.data);

		if (response.data.products.length === 0) {
			throw new NotFoundException('no product found with gtin');
		}
		const product = response.data.products[0];

		return this.getProduct(product.id);
	}

	async getRecommendedProducts(id: string, allergens: string[]): Promise<ProductResponse[]> {
		const product = await this.getProduct(id);

		const key = id + allergens.sort().join(', ');
        if (this.productListCache[key]) {
            return this.productListCache[key];
        }const response = await this.http.get<{ products: ProductResponse[] }>('https://hackzurich-api.migros.ch/products?' + 'limit=10&offset=0&facet_sort_order=asc&order=asc&region=national&view=browse&custom_image=false', {
			params: {
				q: `${this.getAllergensQuery(allergens)} categories.code:(${product.categories[0].id})`
			},
			auth: {
				username: 'hackzurich2020',
				password: 'uhSyJ08KexKn4ZFS',
			},
			headers: {
				'accept': 'application/json',
				'api-version': '7',
				'accept-language': 'de',
			}
		}).toPromise();

		let productList = response.data.products.map(product => ({
			...product,
			description: {
				...product.description,
				text: product.description?.text ? unescape(product.description.text): 'Keine Beschreibung'
			}
		}));
	this.productListCache[key] = productList;
        return productList;
    }

	private getAllergensQuery(allergens: string[]) {
		if (allergens.length == 0) {
			return '';
		}
		return `allergens.code:(${allergens.map(allergen => 'NOT ' + allergen).join(' AND ')}) AND`;
	}


}
