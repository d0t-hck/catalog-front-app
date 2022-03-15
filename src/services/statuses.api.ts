import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api/status',
});

export interface Status {
    id: number;
    code: number;
    name: string;
}

export async function getStatus(id: number) {
    try {
        const { data } = await axiosClient.get(`/${id}`);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function getStatuses() {
    try {
        const { data } = await axiosClient.get('/');
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function updateStatus(id: number, status: Partial<Status>) {
    try {
        const { data } = await axiosClient.put(`/${id}`, status);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function deleteStatus(id: number) {
    try {
        await axiosClient.delete(`/${id}`);
    } catch (error) {
        return [error];
    }
}

export async function createStatus(status:Status) {
    try {
        const { data } = await axiosClient.post('/', status);
        return [null, data];
    } catch (error) {
        return [error];
    }
}
