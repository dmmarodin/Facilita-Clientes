import { Router } from 'express';
import { ClienteController } from './controllers/cliente.controller';

export const router = Router();

/* ROTAS
*  enviam os dados do request (body, query strings)
*  para o controller apropriado
*/

router.get("/", (_, res) => {
    res.redirect("/clients");
});

router.get("/clients", async (_, res) => {
    // Não há payload na listagem, mas caso tivessem
    // query strings, seria enviado ao controller
    const response = await ClienteController.list();
    res.send(JSON.stringify(response));
});