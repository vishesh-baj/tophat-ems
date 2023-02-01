import express from "express";
import jwt from "jsonwebtoken";
import Users from "../schemas/Users.js";
const router = express.Router();

const loginController = router.post("/login", async (req, res) => {
  // Find the user with the given email
  const user = await Users.findOne({ email: req.body.email });
  if (!user) return res.status(401).send("Email or password is incorrect");

  // Validate the password
  const isPasswordValid = await user.validatePassword(req.body.password);
  if (!isPasswordValid)
    return res.status(401).send("Email or password is incorrect");

  // Create a JWT
  const token = jwt.sign(
    { _id: user._id, role: user.role },
    process.env.SECRET_KEY
  );

  // Send the JWT and user information in the response
  res.send({
    token,
    user: {
      id: user._id,
      role: user.role,
    },
  });
});

export default loginController;
