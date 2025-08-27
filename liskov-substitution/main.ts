import { Admin } from "./Admin";
import { Manager } from "./Manager";
import { User } from "./User";

const manager = new Manager();
const admin = new Admin();
const user = new User();


function main() {
    console.log("Liskov Substitution Principle Example");
    manager.getAccess();
    manager.getRole();

    admin.getAccess();
    admin.getRole();

    user.getRole();
}

main();