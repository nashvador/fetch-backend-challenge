import { Router } from "express";
import {
  getPointsFromId,
  parseReciept,
  welcomeMessage,
} from "../controllers/recieptController";

const recieptRouter = Router();

recieptRouter.get("/", welcomeMessage);

recieptRouter.get("/receipts/:id/points", getPointsFromId);

recieptRouter.post("/receipts/process", parseReciept);

export { recieptRouter };
