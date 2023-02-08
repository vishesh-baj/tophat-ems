const Employees = require("../schemas/Employee");
const Users = require("../schemas/Users");

const getAllEmployees = async (req, res) => {
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

const addEmployee = async (req, res) => {
  try {
    const employeePayload = req.body;
    const email = employeePayload.officialEmail;
    const employeeExists = await Employees.findOne({ officialEmail: email });
    if (employeeExists)
      return res
        .status(401)
        .json({ messge: "Employee already exists in db with same email id" });
    // create new employee
    const newEmployee = new Employees(employeePayload);
    const savedEmployee = await newEmployee.save();
    // todo: create user with userId, password, role as per the payload we get from FE
    // const userId = Math.floor(
    //   Math.random(employeePayload.firstName.length) * 10
    // );

    res
      .status(200)
      .json({ message: "Employee created successfully", savedEmployee });
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
