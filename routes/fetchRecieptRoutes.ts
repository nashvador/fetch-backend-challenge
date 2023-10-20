import { Router } from "express";
import {
  testRoute,
  getPointsFromId,
  parseReciept,
} from "../controllers/fetchRecieptController";

const recieptRouter = Router();

recieptRouter.get("/", testRoute);

recieptRouter.get("/receipts/:id/points", getPointsFromId);

recieptRouter.post("/receipts/process", parseReciept);

export { recieptRouter };
