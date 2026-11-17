import express from "express";
import oculosRoutes from "./routes/oculos.routes.js";

const app = express();
app.use(express.json());

app.use("/oculos", oculosRoutes); 
//variavel de importação "oculosRoutes".


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});