import { Payment } from "./models/types";

export class PaymentProcessor {
    async processPayment(bookingId: string, amount: number, paymentMethod: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer'): Promise<Payment> {
        console.log(`Processing payment of $${amount} for booking ${bookingId} via ${paymentMethod}`);
        return {
            bookingId,
            amount,
            paymentDate: new Date(),
            paymentMethod,
            status: 'pending'
        }
    }
    async validatePayment(payment: Payment): Promise<boolean> {
        console.log(`Validating payment for booking ${payment.bookingId}`);
        return true;
    }
}