import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { info, error } from "./logger";

const requestLogger = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  info("Method:", request.method);
  info("Path:  ", request.path);
  info("Body:  ", request.body);
  info("---");
  next();
};

const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler: ErrorRequestHandler = (
  error,
  _request: Request,
  _response: Response,
  next: NextFunction
) => {
  error(error);
  next(error);
};

export { requestLogger, errorHandler, unknownEndpoint };
