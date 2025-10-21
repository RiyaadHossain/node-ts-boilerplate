import express, { type Application, type Request, type Response } from "express";
import cors from "cors";
// import morgan from "morgan";
// import routes from "./routes/index.js";

const app: Application = express();

// Middlewares
app.use(cors());
// app.use(morgan("dev"));
app.use(express.json());

// Routes
// app.use("/api", routes);

// Health check
app.get("/", (req: Request, res: Response) => {
  res.send("🚀 Server is running!");
});

export default app;
