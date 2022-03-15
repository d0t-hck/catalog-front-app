import axios from 'axios';

export interface Genre {
    id: number;
    name: string;
}

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api/genre',
});

export async function getGenre(id:number) {
    try {
        const { data } = await axiosClient.get(`/${id}`);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function getGenres() {
    try {
        const { data } = await axiosClient.get('/');
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function updateGenre(id:number, genre: Partial<Genre>) {
    try {
        const { data } = await axiosClient.put(`/${id}`, genre);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function deleteGenre(id:number) {
    try {
        const { data } = await axiosClient.delete(`/${id}`);
    } catch (error) {
        return [error];
    }
}

export async function createGenre(genre:Genre) {
    try {
        const { data } = await axiosClient.post('/', genre);
        return [null, data];
    } catch (error) {
        return [error];
    }
}
