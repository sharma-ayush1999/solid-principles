import { Print } from "./models/types";

export class PrintDocument implements Print {
    printDocument(): void {
        console.log('Document printed.');
    }
}