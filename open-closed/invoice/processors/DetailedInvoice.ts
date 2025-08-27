import { IInvoiceStrategy } from "../models/types";

export class DetailedInvoice implements IInvoiceStrategy {

    generateInvoice(): void {
        console.log("Generating detailed invoice.");
    }
}