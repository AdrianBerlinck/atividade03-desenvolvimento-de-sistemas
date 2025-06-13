import cors from '@fastify/cors';
import fastify from 'fastify';
import { NomeController } from './controllers/NomeController';

const app = fastify();

app.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', "PATCH", 'DELETE']
}) 

app.register(NomeController); 

app.listen({ port: 3333 }).then(() => {
    console.log("Backend rodando na porta 3333!!!")
})