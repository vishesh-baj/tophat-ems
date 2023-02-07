const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const loginController = require("../controllers/loginController");
const Users = require("../schemas/Users");
const router = express.Router();
router.post("/login", loginController);
module.exports = router;
