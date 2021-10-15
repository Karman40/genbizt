import express from 'express';
import { LoginController} from './src/controller/login-controller';
import { RegisterController } from './src/controller/register-controller';
import { AuthController } from './src/controller/auth.controller';


export function getRouter(){
    const router = express.Router();
   
    const loginController = new LoginController();
    const authController = new AuthController();

    router.get('/logins', loginController.getAll);
    router.get('/logins/:id', loginController.get);
    router.post('/logins', loginController.create);
    router.put('/logins', loginController.update);
    router.delete('/logins/:id', loginController.delete);

    const registerController = new RegisterController();

    router.get('/registers', registerController.getAll);
    router.get('/registers/:id', registerController.get);
// regisztráció
    router.post('/register', authController.register);
    router.post('/login', authController.login);

    router.put('/registers', registerController.update);
    router.delete('/registers/:id', registerController.delete);

    return router;
}