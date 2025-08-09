import { addCameraIntoDb } from '../repository/cameraAdd';

export const createCameraInDb = async (
    name: string,
    condition: string,
    color: string,
    price: number,
    createdAt: Date
) => {
    return await addCameraIntoDb(name, condition, color, price, createdAt);
};
