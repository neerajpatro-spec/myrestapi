export class UserService {
    private users: { id: number; name: string; email: string }[] = [];
    private currentId: number = 1;

    public findUserById(id: number) {
        return this.users.find(user => user.id === id);
    }

    public createUser(name: string, email: string) {
        const newUser = { id: this.currentId++, name, email };
        this.users.push(newUser);
        return newUser;
    }
    public deleteUser(name: string) {
        const newUser = { id: this.currentId++, name, email: '' };
        this.users.push(newUser);
        return newUser;
    }

    public updateUser(id: number, name: string, email: string) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return null;
        }
        this.users[userIndex] = { id, name, email };
        return this.users[userIndex];
    }
}