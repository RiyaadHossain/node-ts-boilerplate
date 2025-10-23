import express from "express";
import type { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import errorHandler from "@/app/middlewares/error-handler.js";
import router from "@app/routes/index.js";
import morgan from "morgan";
import { morganFormat, morganStream } from "@/configs/morgan.js";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(morganFormat, { stream: morganStream }));

// Routes
app.use("/api/v1", router);

// Health check
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "🚀 Server is running!" });
});

app.use(errorHandler);

export default app;
