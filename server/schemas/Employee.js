const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    primaryContactNumber: {
      type: String,

      unique: true,
    },
    secondaryContactNumber: {
      type: String,

      unique: true,
    },
    primaryAddress: {
      type: String,

      unique: true,
    },
    secondaryAddress: {
      type: String,
    },
    officialEmail: {
      type: String,

      unique: true,
    },
    personalEmail: {
      type: String,

      unique: true,
    },
    dateOfBirth: {
      type: String,
    },
    designation: {
      type: String,
    },
    department: {
      type: String,
    },
    experience: {
      type: String,
    },
    dateOfJoining: {
      type: String,
    },
    dateOfReleiving: {
      type: String,
    },
    documents: {
      type: Array,
    },
    role: {
      type: String,
    },
    permissions: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
