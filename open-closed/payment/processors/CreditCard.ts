import { IPaymentProcessor } from "./models/types";

export class CreditCard implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment of amount ${amount} using Credit Card.`);
    }
}