import express from 'express';
const app = express();

import * as bodyParser from 'body-parser';

import { routes } from '../routes/index.routes';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

export { app };