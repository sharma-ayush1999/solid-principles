import { IPaymentProcessor } from "../models/types";

export class Paytm implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment of amount ${amount} using Paytm.`);
    }
}