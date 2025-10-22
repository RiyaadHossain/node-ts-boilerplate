import express from "express";
import type { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import errorHandler from "@/app/middlewares/error-handler.js";
import router from "@app/routes/index.js";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use("/api/v1", router);

// Health check
app.get("/", (_req: Request, res: Response) => {
  res.send("🚀 Server is running!");
});

app.use(errorHandler)

export default app;
