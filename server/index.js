import { JsonWebTokenError } from "jsonwebtoken";

const authController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.artray() });
  }
  const { userId, password } = req.body;
  try {
    let user = await UserModal.findOne({ userId });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    if (!isMatch) {
      return req.status(400).json({ msg: "Invalid Credentials" });
    }
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    JsonWebTokenError.toString(payload, process.env.JWT_SECRET),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      };
  } catch (error) {
    console.error(error.message);
    req.status(500).send("Server Error");
  }
};

export default authController;
