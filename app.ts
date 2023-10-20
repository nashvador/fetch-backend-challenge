import express, { Request, Response, Application } from "express";
import {
  requestLogger,
  unknownEndpoint,
  errorHandler,
} from "./utils/middleware";
import cors from "cors";

import { recieptRouter } from "./routes/fetchRecieptRoutes";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/", recieptRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
