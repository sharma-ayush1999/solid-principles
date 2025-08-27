import { ModernUserService } from "./ModernUserService";
import { MongoRepository } from "./repository/MongoRepository";
import { PostgresRepository } from "./repository/PostgresRepository";
import { UserController } from "./UserController";
import { UserService } from "./UserService";

const mongoRepo = new MongoRepository();
const postgresRepo = new PostgresRepository();
const userService = new UserService(postgresRepo);
const modernUserService = new ModernUserService(postgresRepo);
const userController = new UserController(modernUserService);

function main() {
    userController.save()
}
main()