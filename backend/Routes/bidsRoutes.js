import {placeBidController} from '../Controllers/bidsController.js';
import { verifyToken } from "../middleware/TokensMiddleware.js";
import express from "express";
const router = express.Router();
router.post("/placebid/:id", verifyToken, placeBidController);

export default router;