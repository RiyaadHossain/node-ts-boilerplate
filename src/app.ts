import express from "express";
import type { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
// app.use("/api", routes);

// Health check
app.get("/", (_req: Request, res: Response) => {
  res.send("🚀 Server is running!");
});

export default app;
