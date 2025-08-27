import { Repository } from "../models/types";

export class MongoRepository implements Repository {
    save(): void {
        console.log("Saving data to MongoDB.");
    }
}