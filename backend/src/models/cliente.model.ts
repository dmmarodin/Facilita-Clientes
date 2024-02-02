import { QueryResult } from 'pg';
import DB from '../db';

export interface Cliente {
    id?: number,
    nome: string,
    email: string,
    telefone: string,
    coord_x: number,
    coord_y: number
}

// Order by ID por facilita testes da rota mais curta, já que garante que
// A rota inicial já não vai ser a mais curta.
export class ClienteModel {
    public static async list(query?: string): Promise<Cliente[]> {
        const db = DB.getInstance();
        let result: QueryResult<any>;

        if (query) {
            const searchPattern = "%" + query + "%";
            result = await db.query("SELECT * FROM clientes WHERE nome LIKE $1 OR telefone LIKE $1 OR email LIKE $1 ORDER BY id ASC", [searchPattern]);
        } else {
            result = await db.query(`SELECT * FROM clientes ORDER BY id ASC`);
        }
        return result.rows.map(v => v as Cliente);
    }

    public static async create(cliente: Cliente): Promise<Cliente> {
        const db = DB.getInstance();
        const result = await db.query(
            `INSERT INTO clientes (nome, email, telefone, coord_x, coord_y) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [cliente.nome, cliente.email, cliente.telefone, cliente.coord_x, cliente.coord_y]
        );

        return result.rows[0] as Cliente;
    }
}