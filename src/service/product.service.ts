import {HttpService, Injectable} from '@nestjs/common'
import {ProductResponse} from "../types/migros-product-response"
import {Product} from "../types/migros-product.type"

@Injectable()
export class ProductService {
    cache: { [key: string]: Product } = {};

    constructor(private http: HttpService) {
    }

    async getProduct(id: string): Promise<any> {
        if (this.cache[id]) {
            return this.cache[id];
        }
        const response = await this.http.get<ProductResponse>('https://hackzurich-api.migros.ch/products/' + id + '?view=browse&custom_image=false', { auth: {
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

        console.log(response);
        let product = this.mapResponseToProduct(response.data);
        this.cache[id] = product;
        return product;
    }

    private mapResponseToProduct(response: ProductResponse): Product {
        return {
            id: response.id,
            name: response.name,
            description: response.description?.text,
            image: response.image.original,
            brand:  response.brand.name,
            categories: response.categories.map((category) => {
                return {
                    id: category.code,
                    name: category.name,
                }
            }),
            ingredients: response.ingredients,
            allergenText: response.allergen_text,
            healthy: undefined, // TODO: how to calculate?
            nutrients: response.nutrition_facts.standard.nutrients.map((nutrients) => {
                return {
                    name: nutrients.name,
                    quantity: nutrients.quantity,
                    quantityUnit: nutrients.quantity_unit,
                }
            }),
            allergens: response.allergens !== undefined ? response.allergens?.map((allergen) => {
                return {
                    code: allergen.code,
                    name: allergen.name,
                    contamination_code: allergen.contamination_code,
                    contamination: allergen.contamination,
                }
            }) : [],
            price: response.price.item.price,
            origin: response.origins.producing_country,
        }
    }
}
