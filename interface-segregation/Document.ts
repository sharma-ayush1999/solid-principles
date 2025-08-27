import { DocumentManager } from "./models/types";

export class Document implements DocumentManager {
    openDocument(): void {
        console.log('Document opened.');
    }

    closeDocument(): void {
        console.log('Document closed.');
    }

    saveDocument(): void {
        console.log('Document saved.');
    }
}