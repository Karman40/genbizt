import { Request, Response } from "express";
import { Repository } from "typeorm";

export abstract class Controller {
    repository: Repository<any>;
    
    create = async (req: Request, res: Response) => {
        const entity = await this.repository.create(req.body);

        try {
            const entityAdded = await this.repository.save(entity);
            res.json(entityAdded);
        } catch (err) {
            console.error(err);   
            this.handleError(res);         
        }
    }
    getAll = async (req: Request, res: Response) => {
        try {
            const entities = await this.repository.find();
            res.json(entities);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }

    get = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const entity = await this.repository.findOne(id);

            if(entity){
                this.handleError(res, 404, 'Not found');
            }
            res.json(entity);

        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }

    update = this.create;

    delete = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const entity = await this.repository.findOne(id);

            if(entity){
                this.handleError(res, 404, 'Not found');
            }
            await this.repository.delete(entity);
            res.json({success: true});

        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }
    
    handleError = (res, status = 500, message = 'Server error') => {
        res.status(status).json(message);
    }
}