import { Router } from "express";
import { listarOculos } from "../controllers/oculos.controller.js";

const router = Router();

router.get("/", listarOculos);

export default router;