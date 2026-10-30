import { Router } from "express";
import {
    listarOculos,
    cadastrarOculos
} from "../controllers/oculos.controller.js";

const router = Router();

router.get("/", listarOculos);
router.post("/", cadastrarOculos);

export default router;