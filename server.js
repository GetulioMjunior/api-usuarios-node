const express = require("express");
const connectDB = require("./config/db");

const usuariosRoutes = require("./routes/usuarios");

const app = express();

connectDB();
app.use(express.json());

app.use("/usuarios", usuariosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});