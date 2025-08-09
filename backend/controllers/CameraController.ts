import { log } from 'console';
import { FastifyReply, FastifyRequest } from 'fastify';
import { createCameraInDb } from '../services/addCamera';

class CameraController {
    CreateCamera = async (
        req: FastifyRequest<{
            Body: {
                name: string;
                condition: string;
                color: string;
                price: number;
                createdAt: Date;
            };
        }>,
        res: FastifyReply
    ) => {
        try {
            const { name, condition, color, price, createdAt } = req.body;
            const camera = await createCameraInDb(
                name,
                condition,
                color,
                price,
                createdAt
            );
            console.log('Camera added to DB', camera);
            return res.status(200).send(camera);
        } catch (err) {
            console.error('Camera adding failed: ' + err);
            return res.status(500).send({ error: 'Internal server error' });
        }
    };
}

export default new CameraController();
