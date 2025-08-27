import { Repository, Service } from "./models/types";

export class ModernUserService implements Service {
    constructor(private repository: Repository) { }
    save(): void {
        this.repository.save()
    }
}