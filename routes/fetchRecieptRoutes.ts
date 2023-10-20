import { Router } from "express";
import {
  testRoute,
  getPointsFromId,
  parseReciept,
} from "../controllers/recieptController";

const recieptRouter = Router();

recieptRouter.get("/", testRoute);

recieptRouter.get("/receipts/:id/points", getPointsFromId);

recieptRouter.post("/receipts/process", parseReciept);

export { recieptRouter };
