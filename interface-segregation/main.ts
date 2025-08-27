import { Document } from "./Document";
import { EditDocument } from "./EditDocument";
import { PrintDocument } from "./PrintDocument";
import { ScanDocument } from "./ScanDocument";


const document = new Document();
const editDocument = new EditDocument();
const scanDocument = new ScanDocument();
const printDocument = new PrintDocument();

function main() {
    document.openDocument();
    editDocument.editDocument();
    scanDocument.scanDocument();
    printDocument.printDocument();
    document.saveDocument();
    document.closeDocument();
}
main()