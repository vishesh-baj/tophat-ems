import express from "express";
const router = express.Router();
import loginController from "../controllers/loginController.js";
// login route
router.post("/login", loginController);
export default router;

