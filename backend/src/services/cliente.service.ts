import { ClienteCreationPayload } from "../controllers/cliente.controller";
import { Cliente, ClienteModel } from "../models/cliente.model"

/* SERVICE
*  responsável pelas regras de negócio puras, tendo roteamento
*  e tratamento de dados realizados em passos anteriores.
*  Usa uma interface para servir de contrato de dados do payload.
*/

export class ClienteService {
    public async list(): Promise<ClienteListingResponse> {
        const clientes = await ClienteModel.list();
        return {
            clientes
        }
    }

    public async create(data: ClienteCreationPayload): Promise<ClienteCreationResponse> {
        const cliente = await ClienteModel.create({
            ...data
        });

        return cliente;
    }
}


export interface ClienteListingResponse {
    clientes: Cliente[]
}

export interface ClienteCreationResponse {

}