const Users = require("../schemas/Users");
const getAllUsers = async (req, res) => {
  try {
    const usersList = await Users.find({});
    res.status(200).json(usersList);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

const addUser = async (req, res) => {
  try {
    const payload = req.body;
    const user = Users.findOne(payload);
    if (user) return res.json(user);
    const newUser = new Users(userId, role, password);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  userController: {
    getAllUsers,
    addUser,
  },
};

