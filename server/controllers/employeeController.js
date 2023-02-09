const Employees = require("../schemas/Employee");
const Users = require("../schemas/Users");
const { v4: uuidv4 } = require("uuid");
const createPassword = require("../utils");
const bcrypt = require("bcrypt");
// * get list of all employees
const getAllEmployees = async (_req, res) => {
  try {
    const allEmployeesList = await Employees.find({});
    res.status(200).json({
      message: "all employees fetch successfully",
      employeesList: allEmployeesList,
    });
  } catch (error) {
    res.status(400).json({ message: "error occured", error });
  }
};

// * add an employee
const addEmployee = async (req, res) => {
  try {
    const employeePayload = req.body;
    const email = employeePayload.officialEmail;
    const employeeExists = await Employees.findOne({ officialEmail: email });

    if (employeeExists)
      return res.status(401).json({
        messge: "Employee already exists in db with same email id",
      });
    const newEmployee = new Employees(employeePayload);
    const savedEmployee = await newEmployee.save();

    const userIdArr = uuidv4().split("-");
    const userId = userIdArr[0] + userIdArr[3];
    const userPassword = createPassword(
      employeePayload.firstName,
      employeePayload.department,
      userIdArr
    );
    const userExists = await Users.findOne({ userId });
    if (userExists)
      return res.json({
        message:
          "user already exists in db with userId, cannot proceed further",
      });
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);

    const newUser = new Users({
      userId,
      role: employeePayload.role,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    res.status(200).json({
      message:
        "Employee created successfully, User created successfully from Employee.",
      savedEmployee,
      savedUser,
      // should be sent only once and then deleted
      userPassword,
    });
  } catch (error) {
    res.status(400).json({ message: "error occured", error });
  }
};

module.exports = {
  employeeController: {
    getAllEmployees,
    addEmployee,
  },
};
