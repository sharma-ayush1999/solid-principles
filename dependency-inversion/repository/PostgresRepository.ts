import { Repository } from "../models/types";

export class PostgresRepository implements Repository {
    save(): void {
        console.log("Saving data to PostgreSQL.");
    }

}