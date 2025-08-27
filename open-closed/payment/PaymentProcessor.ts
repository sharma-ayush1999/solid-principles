import { IPaymentProcessor } from "./models/types";

export class PaymentProcessor {
    processor: IPaymentProcessor

    constructor(paymentProcessor: IPaymentProcessor) {
        this.processor = paymentProcessor;
    }

    processPayment(amount: number): void {
        this.processor.processPayment(amount);
    }

}