import { Order } from "./Order";


export class PricingCalculator {
    calculateTotal(order: Order): number {
        return order.getProducts().reduce((total, product) => total + product.price, 0);
    }
}