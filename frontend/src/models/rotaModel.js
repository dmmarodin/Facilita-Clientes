import axios from "axios";

const req = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URI,
});

export class RotaModel {
    static async get() {
        const response = await req.get(`/rota`);
        const data = response.data;

        if (data.error) throw new Error();
        return data.data;
    }
}
