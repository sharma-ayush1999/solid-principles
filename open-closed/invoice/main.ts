import { DetailedInvoice } from "./processors/DetailedInvoice";
import { SummarizedInvoice } from "./processors/SummarizedInvoice";

const summarizedInvoice = new SummarizedInvoice();
const detailedInvoice = new DetailedInvoice();

function main() {
    summarizedInvoice.generateInvoice();
    detailedInvoice.generateInvoice();
}

main()