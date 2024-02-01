import { Client } from "../models/client.model"

/* SERVICE
*  responsável pelas regras de negócio puras, tendo roteamento
*  e tratamento de dados realizados em passos anteriores.
*  Usa uma interface para servir de contrato de dados do payload.
*/

export class ClientService {
    public async list(): Promise<ClientListingResponse> {
        return {
            clients: []
        }
    }
}

export interface ClientListingResponse {
    clients: Client[]
}