import { User } from "./User";


export class Manager extends User {

    getAccess(): void {
        console.log('Manager access level.');
    }

    getRole(): void {
        console.log('Manager role.');
    }

}   