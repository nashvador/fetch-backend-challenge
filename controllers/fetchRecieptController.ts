import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import { calculateRecieptPoints } from "../functions/calculateRecieptPoints";

const recieptsStore = new Map();

const testRoute = (_request: Request, response: Response) => {
  response.send("Welcome to the server");
};

const getPointsFromId = (request: Request, response: Response) => {
  const recieptId = request.params.id;
  const reciept = recieptsStore.get(recieptId);

  if (!reciept) {
    return response.status(404).send({
      errorMessage: `The reciept with id ${recieptId} has not been found.`,
    });
  }
  response.status(200).send({ points: reciept.calculatedPoints });
};

const parseReciept = (request: Request, response: Response) => {
  const reciept = request.body;
  const recieptId = uuidv4();
  const recieptPoints = calculateRecieptPoints(reciept);
  reciept.calculatedPoints = recieptPoints;

  recieptsStore.set(recieptId, reciept);

  response.status(200).send({ id: recieptId });
};

export { testRoute, getPointsFromId, parseReciept };
