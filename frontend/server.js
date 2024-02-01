require("dotenv").config();
const express = require("express");
const path = require("path");

/*  SERVER
 *   Servidor express para requisito de páginas
 *   Pode ser substituido por hospedagem como Firabase
 */

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (_, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT, () => {
    console.log("frontend escutando porta " + process.env.PORT);
});
