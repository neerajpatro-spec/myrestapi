export interface User {
    id: string;
    name: string;
    email: string;
}

export class UserModel {
    private users: User[] = [];

    public findUserById(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }

    public createUser(name: string, email: string): User {
        const newUser: User = {
            id: this.generateId(),
            name,
            email
        };
        this.users.push(newUser);
        return newUser;
    }

    public updateUser(id: string, name: string, email: string): User | undefined {
        const user = this.findUserById(id);
        if (user) {
            user.name = name;
            user.email = email;
            return user;
        }
        return undefined;
    }

    private generateId(): string {
        return (Math.random() * 100000).toFixed(0);
    }
}