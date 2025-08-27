export interface DocumentManager {
    openDocument(): void;
    closeDocument(): void;
    saveDocument(): void;

}

export interface Print {
    printDocument(): void;
}

export interface Scan {
    scanDocument(): void;
}

export interface Edit {
    editDocument(): void;
}