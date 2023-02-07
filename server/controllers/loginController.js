const jwt = require("jsonwebtoken");
const Users = require("../schemas/Users");
const bcrypt = require("bcrypt");

// Login route
const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await Users.findOne({ userId });
    if (!user) return res.status(401).json({ message: "user not found" });
    const validPassword = bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).json({ message: "Password is invalid" });
    // create a token
    const token = jwt.sign(
      { useId: user.userId, role: user.role },
      process.env.JWT_SECRET
    );
    res.status(200).json({ token });
    // send the token in response
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = loginController;
