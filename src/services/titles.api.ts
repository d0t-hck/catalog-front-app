import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api/title',
});

export interface Title {
    id: number;
    name: string;
    release_year: number;
    status_code: number;
    description: string;
    author_id: number;
    artist_id: number;
    publisher_id: number;
    normalized_name: string;
}

export async function getTitle(id:number){
    try {
        const { data } = await axiosClient.get(`/${id}`);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function getTitles() {
    try {
        const { data } = await axiosClient.get('/');
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function updateTitle(id:number, title: Partial<Title>) {
    try {
        const { data } = await axiosClient.put(`/${id}`, title);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function createTitle(title:Title) {
    try {
        const { data } = await axiosClient.post('/', title);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

export async function deleteTitle(id:number) {
    try {
        const { data } = await axiosClient.delete(`/${id}`);
        return [null, data];
    } catch (error){
        return [error];
    }
}
