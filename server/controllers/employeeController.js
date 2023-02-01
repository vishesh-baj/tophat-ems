import { Router } from "@mui/icons-material";
import express from "express";
import jwt from "jsonwebtoken";
import verifyToken from "../middlewares/AuthMiddleware";
import Employees from "../schemas/Employees";

Router.post("/employees/add-employee", verifyToken, async (req, res) => {
  const payload = req.body;
});

