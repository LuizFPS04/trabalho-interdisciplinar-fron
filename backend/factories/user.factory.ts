import { User } from "../types/userType";

export class UserFactory {
    static createUser(type: string, userData: Partial<User>): User {
        if (type === "admin") {
            return new AdminUser(userData);
        } else if (type === "normal") {
            return new NormalUser(userData);
        }
        throw new Error("Invalid user type");
    }
}

class AdminUser implements User {
    id: number;
    name: string;
    email: string;
    nickname: string;
    password: string;
    birth: Date;
    role: string = "admin";

    constructor(userData: Partial<User>) {
        this.id = userData.id!;
        this.name = userData.name!;
        this.email = userData.email!;
        this.nickname = userData.nickname!;
        this.password = userData.password!;
        this.birth = userData.birth!;
    }
}

class NormalUser implements User {
    id: number;
    name: string;
    email: string;
    nickname: string;
    password: string;
    birth: Date;
    role: string = "user";

    constructor(userData: Partial<User>) {
        this.id = userData.id!;
        this.name = userData.name!;
        this.email = userData.email!;
        this.nickname = userData.nickname!;
        this.password = userData.password!;
        this.birth = userData.birth!;
    }
}
