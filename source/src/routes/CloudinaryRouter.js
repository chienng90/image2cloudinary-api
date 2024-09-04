import express from "express";
import catchAsync from "../utils/asyncHandler.js";
import { generateSignature } from "../controllers/CloudinaryController.js";

const cloudinaryRouter = express.Router();

cloudinaryRouter.get("/get-signature", catchAsync(generateSignature));

export default cloudinaryRouter;