import { User } from "./User";



export class Admin extends User {

    getAccess(): void {
        console.log('Admin access level.');
    }

    getRole(): void {
        console.log('Admin role.');
    }

}