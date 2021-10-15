import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { Users } from "../entity/Users";

var md5 = require('md5');
export class AuthController {
    login = async (req: Request, res: Response) => {

        try {
            let { username, password } = req.body;
            const hashed_password = md5(password.toString());

            const userRepository = getRepository(Users);
            let user: Users;
            user = await userRepository.findOne({ where: [{ username: username, password: hashed_password }] });
            console.log(JSON.stringify(user));
            if (user) {
                let token = jwt.sign({ username }, 'secret');
                console.log("token: " + token);
                res.send({ status: 1, username: user.username, token: token });
            }
        }
        catch (error) {
            res.status(401).send();
        }
    };

    register = async (req: Request, res: Response) => {

        try {
            let { username, password } = req.body;
            const hashed_password = md5(password.toString())
            const userRepository = getRepository(Users);
            let user: Users;
            user = await userRepository.findOne({ where: { username } });
            if (!user) {
                req.body.password = hashed_password;
                const entity = userRepository.create(req.body);
                const entityAdded = userRepository.save(entity);
                let token = jwt.sign({ username }, 'secret');
                console.log("token: " + token);
                res.send({ status: 1, username: user.username, token: token });
                //res.json(entityAdded);
                console.log("reg ok");

            } else {
                console.log("van user");
            }

            console.log("reg ok");
        }
        catch (error) {
            res.status(401).send();
        }
    };
}
export default AuthController;