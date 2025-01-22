import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ticketRoutes from "./routes/ticket-routes";
import { errorHandler } from "./middlewares/error-handler";

dotenv.config();
export const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tickets", ticketRoutes);
app.use(errorHandler);
