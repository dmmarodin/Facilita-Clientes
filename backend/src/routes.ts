import { Router } from 'express';

export const router = Router();

router.get("/", (_, res) => {
    res.send(JSON.stringify({ message: "teste" }));
})