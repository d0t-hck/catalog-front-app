import axios from 'axios';

export interface Page {
    id: number;
    page: number;
    chapter_id: number;
}

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api/genre',
});

export async function getPage(id:number) {
    try {
        const { data } = await axiosClient.get(`/${id}`);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function getPages() {
    try {
        const { data } = await axiosClient.get('/');
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function updatePage(id:number, page: Partial<Page>) {
    try {
        const { data } = await axiosClient.put(`/${id}`, page);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function deletePage(id:number) {
    try {
        const { data } = await axiosClient.delete(`/${id}`);
    } catch (error) {
        return [error];
    }
}

export async function createPage(page:Page) {
    try {
        const { data } = await axiosClient.post('/', page);
        return [null, data];
    } catch (error) {
        return [error];
    }
}
