
import { Cliente } from "../models/cliente.model";
import { ClienteCreationResponse, ClienteListingResponse, ClienteService } from "../services/cliente.service";
import { ResultObject } from "../types";
import { z } from "zod";

/* CONTROLLER
*  Responsável por validar o payload entre outras possíveis
*  alterações no dado do request antes de enviar para que o
*  'service' realize alterações.
*/


export class ClienteController {
    // Listagem de clientes
    public static async list(): Promise<ResultObject<ClienteListingResponse>> {
        const service = new ClienteService();
        try {
            const result = await service.list();
            return {
                error: false,
                data: result
            }
        } catch (e) {
            const error = e as Error;
            return {
                error: true,
                message: error.message
            }
        }
    }

    public static async create(body: unknown): Promise<ResultObject<ClienteCreationResponse>> {
        const service = new ClienteService();

        const validator = z.object({
            nome: z.string().max(60),
            email: z.string().email().max(60),
            telefone: z.string().max(14)
        });

        try {
            const payload = validator.parse(body) as ClienteCreationPayload;

            const result = await service.create(payload);

            return {
                error: false,
                data: result
            }
        } catch (e) {
            const error = e as Error;
            return {
                error: true,
                message: error.message
            }
        }
    }
}

export type ClienteCreationPayload = Omit<Cliente, "id">;