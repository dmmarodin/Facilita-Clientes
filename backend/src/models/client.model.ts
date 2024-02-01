export interface Client {
    nome: string,
    email: string,
    telefone: string
}

export class ClientModel {
    public async list(): Promise<Client[]> {
        return [];
    }
}