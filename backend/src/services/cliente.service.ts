import { Cliente, ClienteModel } from "../models/cliente.model"

/* SERVICE
*  responsável pelas regras de negócio puras, tendo roteamento
*  e tratamento de dados realizados em passos anteriores.
*  Usa uma interface para servir de contrato de dados do payload.
*/

export class ClienteService {
    public async list(): Promise<ClienteListingResponse> {
        const clients = await ClienteModel.list();
        return {
            clients
        }
    }
}

export interface ClienteListingResponse {
    clients: Cliente[]
}