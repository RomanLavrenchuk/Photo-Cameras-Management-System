import { db } from '../services/db';

export const addCameraIntoDb = async (
    name: string,
    condition: string,
    color: string,
    price: number,
    createdAt: Date
) => {
    return await db.camera.create({
        data: {
            name,
            condition,
            color,
            price,
            createdAt,
        },
    });
};
