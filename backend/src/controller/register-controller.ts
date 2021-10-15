import { getRepository } from "typeorm";
import { Register } from "../entity/Register";
import { Controller } from "./controller";

export class RegisterController extends Controller{
    repository = getRepository(Register)
}