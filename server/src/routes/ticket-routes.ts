import { Router } from "express";
import { getTicketsHandler } from "../controllers/ticket-controller";

const router = Router();

router.get("/", getTicketsHandler);

export default router;
