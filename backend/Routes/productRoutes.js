import express from "express";
import { verifyToken } from "../middleware/TokensMiddleware.js";

import { addProducts,fechproducts, fetchproductbyid,deleteproductbyid,everyproductfetch } from "../controllers/productControllers.js";

const router = express.Router();

router.post("/addproduct", verifyToken, addProducts);
router.get("/allproduct", everyproductfetch);
router.get("/fetchproduct", verifyToken, fechproducts);
router.get("/fetchproduct/:id", verifyToken, fetchproductbyid);
router.get("/delete/:id", verifyToken, deleteproductbyid);
// router.post("/login", login);
export default router;

