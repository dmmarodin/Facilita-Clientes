
/* CONTROLLER
*  Responsável por validar o payload entre outras possíveis
*  alterações no dado do request antes de enviar para que o
*  'service' realize alterações.
*/

import { ClienteListingResponse, ClienteService } from "../services/cliente.service";

export class ClienteController {
    // Listagem de clientes
    public static async list(): Promise<ClienteListingResponse> {
        const service = new ClienteService();
        return await service.list();
    }
}