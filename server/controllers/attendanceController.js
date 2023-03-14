const Attendance = require("../schemas/Attendance");
const Employee = require("../schemas/Employee");
const markAttendance = async (req, res) => {
  try {
    const { employeeId, date, status, notes } = req.body;
    const employeeExists = await Employee.findById(employeeId);
    if (!employeeExists)
      return res
        .status(404)
        .json({ message: "employee doesnot exist with provided userid" });
    const newAttendanceEntry = new Attendance({
      employeeId,
      date,
      status,
      notes,
    });
    const savedAttendanceEntry = await newAttendanceEntry.save();
    res.status(200).json({
      message: "attendance updated successfully",
      savedAttendanceEntry,
    });
  } catch (error) {
    res.status(400).json({ message: "error occured", error: error.message });
  }
};
const getAllAttendance = async (req, res) => {
  try {
    const allAttendenceList = await Attendance.find();
    res.status(200).json({
      message: "all attendence fetch successfully",
      allAttendenceList,
    });
  } catch (error) {
    res.status(400).json({ message: "error occured", error });
  }
};

module.exports = {
  attendanceController: {
    markAttendance,
    getAllAttendance,
  },
};
