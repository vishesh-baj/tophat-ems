const express = require("express");
const router = express.Router();
const { employeeController } = require("../controllers/employeeController");
const verifyToken = require("../middlewares/verifyToken");
router.get("/all-employees", verifyToken, employeeController.getAllEmployees);
router.post("/add-employee", verifyToken, employeeController.addEmployee);

module.exports = router;
