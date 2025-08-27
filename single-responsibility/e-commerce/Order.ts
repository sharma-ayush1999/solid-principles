import { Product } from "./product";


export class Order {
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    getProducts(): Product[] {
        return this.products;
    }



}