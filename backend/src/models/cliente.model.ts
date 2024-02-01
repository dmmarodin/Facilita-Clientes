import DB from '../db';

export interface Cliente {
    nome: string,
    email: string,
    telefone: string
}

export class ClienteModel {
    public static async list(): Promise<Cliente[]> {
        const db = DB.getInstance();
        const result = await db.query(`SELECT * FROM clientes;`);
        return result.rows.map(v => v as Cliente);
    }
}