import { Router } from 'express';
import {UserController} from '../controllers/userController';
import {UserService} from '../services/userService';
//created a user service object and send it to user controller as constrctor expecting a user service object
const userService = new UserService();
const router = Router();
const userController = new UserController(userService);
//declartion of variable in two ways
//let userName:string;
//const userName:string;
//for optional parameter, use the ? after the variable name and before colon
//et username?:string;

// Define routes on router first
router.get('/:id', userController.getUser.bind(userController));
router.post('/', userController.createUser.bind(userController));
router.put('/:id', userController.updateUser.bind(userController));

export function setRoutes(app:any) {
    app.use('/api/users', router);
}
export function setRoute(app:any) {
    app.use('/api/users', router);
}
