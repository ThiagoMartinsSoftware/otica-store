import { Router } from "express";
import {  //funções exportadas do controller
    listarOculos,
    cadastrarOculos,
    buscarOculosPorId,
    atualizarOculos,
    excluirOculos
} from "../controllers/oculos.controller.js";

const router = Router();

router.get("/", listarOculos);
router.post("/", cadastrarOculos);
router.get("/:id", buscarOculosPorId);
router.put("/:id", atualizarOculos);
router.delete("/:id", excluirOculos);

export default router;