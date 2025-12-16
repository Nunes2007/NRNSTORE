import express from 'express';
import cors from 'cors';
import { routes } from './routes/main.js';

const server = express();
server.use(cors());
server.use(express.static('public'));
server.use(express.json());
server.use(routes);

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log('Site rodando na porta - '+ port)
});