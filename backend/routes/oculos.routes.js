import { Router } from "express";
//{router} - estamos importando especificamente o recurso chamado router.
//express - indica que ele vem da biblioteca express.

//router é uma ferramenta do express que permite organizar as rotas da nossa API separadamente do arquivo principal server.js.



import {  //funções exportadas do controller
    listarOculos,
    cadastrarOculos,
    buscarOculosPorId,
    atualizarOculos,
    excluirOculos
} from "../controllers/oculos.controller.js";

const router = Router(); //roteador do express para definir as rotas/métodos da API

router.get("/", listarOculos);  //aqui eu crio a função de listar os oculos.
router.post("/", cadastrarOculos); //aqui eu crio a função de cadastrar os oculos.
router.get("/:id", buscarOculosPorId); //aqui eu crio a função de buscar os oculos por id.
router.put("/:id", atualizarOculos); //aqui eu crio a função de atualizar os oculos por id.
router.delete("/:id", excluirOculos);//aqui eu crio a função de excluir os oculos por id.

export default router; // Serve para exportar o roteador (router) para que outros arquivos possam utilizá-lo.