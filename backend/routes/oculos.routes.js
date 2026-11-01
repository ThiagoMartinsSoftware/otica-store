import { Router } from "express";
import {  //funções exportadas do controller
    listarOculos,
    cadastrarOculos,
    buscarOculosPorId,
    atualizarOculos
} from "../controllers/oculos.controller.js";

const router = Router();

router.get("/", listarOculos);
router.post("/", cadastrarOculos);
router.get("/:id", buscarOculosPorId);
router.put("/:id", atualizarOculos);

export default router;