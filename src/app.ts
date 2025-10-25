import router from '@app/routes/index.js';
import errorHandler from '@middlewares/error-handler.js';
import { notFound } from '@middlewares/not-found.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import type { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { morganFormat, morganStream } from '@/configs/morgan.js';

const app: Application = express();
 
// 🧩 Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(morganFormat, { stream: morganStream }));

// 🛣️ API Routes
app.use('/api/v1', router);

// ✅ Health check
app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: '🚀 Server is running!' });
});

// 🔍 Handle API not found
app.use(notFound);

// 🛠️ Handle all other errors (if exists)
app.use(errorHandler);

export default app;
