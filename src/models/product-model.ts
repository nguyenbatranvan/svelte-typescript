import {BaseModel} from "~/models/base-model";

export class ProductModel extends BaseModel {
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[]

    constructor() {
        super();
    }
}
