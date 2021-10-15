import { getRepository } from "typeorm";
import { Login } from "../entity/Login";
import { Controller } from "./controller";

export class LoginController extends Controller{
    repository = getRepository(Login)
}