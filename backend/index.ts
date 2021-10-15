import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {connectionOptions} from './ormconfig';
import express from 'express';
import { getRouter } from './routes';
import bodyParser from 'body-parser';

createConnection(connectionOptions).then(async connection =>{

    const app = express();

    app.use(bodyParser.json());

    app.use('/api', getRouter());

    app.listen(3000, () => {
        console.log ('Sikerült');
});

}).catch(error =>console.log(error));
