require('dotenv').config();
import express from 'express';
import { router } from './routes';

const app = express();

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Executando backend na porta ${process.env.PORT}`);
});