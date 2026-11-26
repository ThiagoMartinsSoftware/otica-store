import express from "express"; // importa algo de outro arquivo ou biblioteca.
import oculosRoutes from "./routes/oculos.routes.js";  //importa as rotas dos oculos.

const app = express(); //criando a aplicação express.
app.use(express.json()); //essa linha permite que o Express interprete os dados enviados no formato JSON no corpo das requisições.

app.use("/oculos", oculosRoutes); 
//variavel de importação "oculosRoutes".
// essa linha conecta as rotas que importamos no nosso servidor.
//app.use() → registra um middleware ou conjunto de rotas.
//"/oculos" → define o prefixo dos caminhos.
//oculosRoutes → representa o conjunto de rotas importado.

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});