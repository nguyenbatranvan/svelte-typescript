import type {ApiRequestModel} from "~/models/api-request-model";
import type {ProductModel} from "~/models/product-model";
import {BaseService} from "~/services/core";

class ProductApi extends BaseService {
    constructor() {
        super();
    }

    getProducts(data: Partial<ApiRequestModel>) {
        return this.get<ProductModel[]>({
            ...data,
            url: 'https://dummyjson.com/products'
        });
    }
}

export default new ProductApi();
