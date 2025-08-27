import { IInvoiceStrategy } from "../models/types";

export class SummarizedInvoice implements IInvoiceStrategy {
    generateInvoice(): void {
        console.log("Generating summarized invoice.");
    }
}