import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api/creator',
});

export interface Creator {
    id: number;
    name: string;
    info: string;
    type: string;
}

export async function getCreators() {
    try {
        const { data } = await axiosClient.get('/');
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function getCreator(id: number) {
    try {
        const { data } = await axiosClient.get(`/${id}`);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function updateCreator(id: number, creator: Partial<Creator>) {
    try {
        const { data } = await axiosClient.put(`/${id}`, creator);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function deleteCreator(id: number) {
    try {
        await axiosClient.delete(`/${id}`);
    } catch (error) {
        return [error];
    }
}