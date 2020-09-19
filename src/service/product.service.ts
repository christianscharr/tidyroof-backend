import {HttpService, Injectable} from '@nestjs/common';
import {ProductResponse} from "../types/migro-product-response";

@Injectable()
export class ProductService {

    constructor(private http: HttpService) {
    }

    async get(id: string): Promise<any> {
        return await this.http.get<ProductResponse>('https://hackzurich-api.migros.ch/products/120216000000', { auth: {
                username: "hackzurich20020",
                password: "uhSyJ08KexKn4ZFS",
            }}).toPromise();
    }
}
