import { IInvoiceStrategy } from "./models/types";

export class Invoice {
    processor: IInvoiceStrategy
    constructor(invoiceProcessor: IInvoiceStrategy) {
        this.processor = invoiceProcessor;
    }

    generateInvoice(): void {
        this.processor.generateInvoice();
    }

}