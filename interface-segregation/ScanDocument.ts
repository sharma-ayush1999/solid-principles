import { Scan } from "./models/types";

export class ScanDocument implements Scan {
    scanDocument(): void {
        console.log("Scanning document...");
    }
}