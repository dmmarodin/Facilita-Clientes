import { Router } from 'express';
import { ClienteController } from './controllers/cliente.controller';
import { RotaController } from './controllers/rota.controller';

export const router = Router();

/* ROTAS
*  enviam os dados do request (body, query strings)
*  para o controller apropriado
*/

router.get("/", (_, res) => {
    res.redirect("/clients");
});

router.get("/clientes", async (req, res) => {
    const response = await ClienteController.list(req.query);

    res.status(response.error ? response.error_code : 200)
        .send(JSON.stringify(response));
});

router.post("/clientes", async (req, res) => {
    const response = await ClienteController.create(req.body);
    res.status(response.error ? response.error_code : 200)
        .send(JSON.stringify(response));
});

router.get("/rota", async (_, res) => {
    const response = await RotaController.get();
    res.status(response.error ? response.error_code : 200).send(JSON.stringify(response));
});