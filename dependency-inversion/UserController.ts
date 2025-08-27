import { Service } from "./models/types";

export class UserController {
    constructor(private service: Service) { }
    save(): void {
        this.service.save();
    }
}