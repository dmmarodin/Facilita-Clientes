import { Pool, QueryResult } from "pg";

/* DB
*  Camada de abstração do banco de dados
*  Criado como singleton para deixar explícito
*  o ciclo de vida da pool de conexão durante execução.
*
*  Poderia também ser transformado em singleton
*  através de variável global, mas é má prática e
*  reduz legibilidade.
*/

export default class DB {
    private static instance: DB;

    public pool: Pool;

    public static getInstance(): DB {

        if (!DB.instance)
            DB.instance = new DB();

        return DB.instance;
    }

    private constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER || '',
            host: process.env.DB_HOST || 'localhost',
            database: process.env.DB_DATABASE || 'db',
            password: process.env.DB_PASSWORD || '',
            port: Number.parseInt(process.env.DB_PORT || "5432"),
        });
    }

    // Expondo query da pool
    public async query(sql: string, values?: any[]): Promise<QueryResult<any>> {
        try {
            return this.pool.query(sql, values || []);
        } catch (e: any) {
            let error = e as Error;
            throw new DbError(e.message);
        }
    }

    public getPool(): Pool {
        return this.pool;
    }
}

export class DbError extends Error {
    constructor(message: string) {
        super("Database Error: " + message);
    }
}