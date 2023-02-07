const jwt = require("jsonwebtoken");
const User = require("../schemas/Users");

const authService = {
  // sign token
  signToken: (user) => {
    return jwt.sign(
      {
        userId: user.userId,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
  },
  // verify token
  verifyToken: (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
      return res.status(401).send({
        error: "No token provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          error: "Invalid token",
        });
      }

      User.findOne({
        userId: decoded.userId,
      })
        .then((user) => {
          if (!user) {
            return res.status(401).send({
              error: "User not found",
            });
          }

          req.user = user;
          next();
        })
        .catch((err) => {
          return res.status(500).send({
            error: "Error verifying token",
          });
        });
    });
  },
};

module.exports = authService;
