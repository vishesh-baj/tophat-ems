const express = require("express");
const { userController } = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/all-users", userController.getAllUsers);
router.post("/add-user", userController.addUser);
router.delete("/delete-user/:id", userController.deleteUser);
module.exports = router;
