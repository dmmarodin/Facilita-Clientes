
/* CONTROLLER
*  Responsável por validar o payload entre outras possíveis
*  alterações no dado do request antes de enviar para que o
*  'service' realize alterações.
*/

import { ClientListingResponse, ClientService } from "../services/client.service";

export class ClientController {
    // Listagem de clientes
    public static async list(): Promise<ClientListingResponse> {
        const service = new ClientService();
        return await service.list();
    }
}