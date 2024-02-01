import DB from '../db';

export interface Cliente {
    id?: number,
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

    public static async create(cliente: Cliente): Promise<Cliente> {
        const db = DB.getInstance();
        const result = await db.query(
            `INSERT INTO clientes (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *`,
            [cliente.nome, cliente.email, cliente.telefone]
        );

        return result.rows[0] as Cliente;
    }
}