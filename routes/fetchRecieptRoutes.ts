import { Router } from "express";
import {
  getPointsFromId,
  parseReciept,
} from "../controllers/recieptController";

const recieptRouter = Router();

recieptRouter.get("/receipts/:id/points", getPointsFromId);

recieptRouter.post("/receipts/process", parseReciept);

export { recieptRouter };
