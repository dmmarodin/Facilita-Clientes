import axios from "axios";

const req = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URI,
    headers: {
        "Content-Type": "application/json",
    },
});

export class ClienteModel {
    static async list() {
        const response = await req.get(`/clientes`);
        const data = response.data;

        if (data.error) throw new Error();
        return data.data;
    }

    static async create(cliente) {
        const response = await req.post(`/clientes`, cliente);
        const data = response.data;

        if (data.error) throw new Error();
    }
}
