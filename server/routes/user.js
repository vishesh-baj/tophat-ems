const express = require("express");
const { userController } = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();
router.get("/all-users", verifyToken, userController.getAllUsers);
router.post("/add-user", verifyToken, userController.addUser);
router.delete("/delete-user/:id", verifyToken, userController.deleteUser);
module.exports = router;
