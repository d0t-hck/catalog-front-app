import axios from 'axios';

export interface Chapter {
    id: number;
    num: number;
    name: string;
    title_id: number;
}

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api/chapter',
});

export async function getChapter(id:number) {
    try {
        const { data } = await axiosClient.get(`/${id}`);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function getChapters() {
    try {
        const { data } = await axiosClient.get('/');
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function updateChapter(id:number, chapter: Partial<Chapter>) {
    try {
        const { data } = await axiosClient.put(`/${id}`, chapter);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function deleteChapter(id:number) {
    try {
        const { data } = await axiosClient.delete(`/${id}`);
    } catch (error) {
        return [error];
    }
}

export async function createGenre(chapter:Chapter) {
    try {
        const { data } = await axiosClient.post('/', chapter);
        return [null, data];
    } catch (error) {
        return [error];
    }
}
