import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        // if(!userService)
        //     userService = new UserService();
        this.userService = userService;
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        const userId = Number(req.params.id);
        try {
            const user = await this.userService.findUserById(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        const userData = req.body;
        try {
            const newUser = await this.userService.createUser(userData.name, userData.email);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        const userId:number = Number(req.params.id);
        const userData = req.body;
        try {
            const updatedUser = await this.userService.updateUser(userId, userData.name, userData.email);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}