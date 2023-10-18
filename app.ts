import express, { Request, Response, Application } from "express";
import {
  requestLogger,
  unknownEndpoint,
  errorHandler,
} from "./utils/middleware";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Serve");
});

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
