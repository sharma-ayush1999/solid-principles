
import { BaseUser } from "./Permission";


export class User extends BaseUser {

    getRole(): void {
        console.log('User Role.');
    }

}