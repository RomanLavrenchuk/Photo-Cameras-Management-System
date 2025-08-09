import Fastify from 'fastify';
import cors from '@fastify/cors';
import { db } from './services/db';
import addCameraRoute from './routes/addCamera';

const app = Fastify({ logger: true });
const PORT = 4000;

const start = async () => {
    try {
        await app.register(cors, {
            origin: 'http://localhost:3000',
            credentials: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
        });
        //Public Routes
        app.register(addCameraRoute, { prefix: '/register' });
        db.$connect();
        await app.listen({ port: PORT, host: '0.0.0.0' });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
