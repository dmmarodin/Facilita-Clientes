import { Pool } from "pg";

/* DB
*  Camada de abstração do banco de dados
*  Criado como singleton para deixar explícito
*  o ciclo de vida da pool de conexão durante execução.
*
*  Poderia também ser transformado em singleton
*  através de variável global, mas é má prática e
*  reduz legibilidade.
*/

export class DB {
    private static instance: DB;

    private pool: Pool;

    public static getInstance(): DB {

        if (!DB.instance)
            DB.instance = new DB();

        return this.instance;
    }

    private constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER || '',
            host: process.env.DB_HOST || 'localhost',
            database: process.env.DB_DATABASE || 'db',
            password: process.env.PASSWORD || '',
            port: Number.parseInt(process.env.PORT || "5432"),
        });
    }
}