import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import { calculateRecieptPoints } from "../functions/calculateRecieptPoints";
import { Reciept } from "../types/types";

const recieptsStore: Map<string, Reciept | undefined> = new Map();

const getPointsFromId = (request: Request, response: Response) => {
  const recieptId = request.params.id;
  const reciept: Reciept | undefined = recieptsStore.get(recieptId);

  if (!reciept) {
    return response.status(404).send({
      error: `The reciept with id ${recieptId} has not been found.`,
    });
  } else {
    return response.status(200).send({ points: reciept.calculatedPoints });
  }
};

const parseReciept = (request: Request, response: Response) => {
  const reciept: Reciept = request.body as Reciept;

  if (
    !reciept ||
    !reciept.retailer ||
    !reciept.purchaseDate ||
    !reciept.purchaseTime ||
    !reciept.items ||
    !reciept.total
  ) {
    return response.status(400).send({ error: "The receipt is invalid" });
  }

  const recieptId = uuidv4();
  const recieptPoints = calculateRecieptPoints(reciept);
  reciept.calculatedPoints = recieptPoints;

  recieptsStore.set(recieptId, reciept);

  response.status(200).send({ id: recieptId });
};

const welcomeMessage = (_request: Request, response: Response) => {
  response.status(200).send("Welcome to Fetch Rewards Backend");
};

export { getPointsFromId, parseReciept, welcomeMessage };
