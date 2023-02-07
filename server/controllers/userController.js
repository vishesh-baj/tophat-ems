const Users = require("../schemas/Users");
const bcrypt = require("bcrypt");
const getAllUsers = async (req, res) => {
  try {
    const usersList = await Users.find({});
    res.status(200).json(usersList);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

const addUser = async (req, res) => {
  const { userId, role, password } = req.body;
  const userExists = await Users.findOne({ userId });
  if (userExists)
    return res.status(201).json({ message: "User Already Exists" });
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log("User doesnot exist", "HASHED PASSWORD: ", hashedPassword);
  const newUser = new Users({ userId, role, password: hashedPassword });
  const savedUser = await newUser.save();
  res
    .status(200)
    .json({ message: "user created successfully", userCreated: savedUser });

  try {
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  userController: {
    getAllUsers,
    addUser,
  },
};
