require('dotenv').config();
import express from 'express';
import { router } from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())
app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Executando backend na porta ${process.env.PORT}`);
});