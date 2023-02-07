const jwt = require("jsonwebtoken");
const Users = require("../schemas/Users");
// Login route
const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = Users.findOne({ userId, password });
    if (!user) return res.status(401).json({ message: "user not found" });
    res.json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = loginController;
