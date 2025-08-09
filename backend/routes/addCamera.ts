import { FastifyInstance } from 'fastify';
import CameraController from '../controllers/CameraController';

const addCameraRoute = (app: FastifyInstance) => {
    app.post('/create', CameraController.CreateCamera);
};
export default addCameraRoute;
