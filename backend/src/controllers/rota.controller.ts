import { GetRotaResponse, RotaService } from "../services/rota.service";
import { ResultObject, success, error } from "../types";

export class RotaController {
    public static async get(): Promise<ResultObject<GetRotaResponse>> {
        const service = new RotaService();
        try {
            const result = await service.get();
            return success(result);
        } catch (_) {
            return error(500, "Erro interno");
        }
    }
}