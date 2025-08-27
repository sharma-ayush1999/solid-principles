import { Edit } from "./models/types";

export class EditDocument implements Edit {
    editDocument(): void {
        console.log('Document edited.');
    }
}