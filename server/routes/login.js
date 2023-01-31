import express from "express";
const router = express.Router();
import loginController from "../controllers/loginController";
const { check } = require("express-validator/check");

// login route
router.post(
  "/login",
  [
    check("userId", "userId is required").not().isEmpty(),
    check("password", "password is required").not().isEmpty(),
  ],
  loginController
);

module.exports = router;
