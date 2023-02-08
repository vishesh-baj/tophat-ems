const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    primaryContactNumber: {
      type: String,
      required: true,
      unique: true,
    },
    secondaryContactNumber: {
      type: String,
      required: true,
      unique: true,
    },
    primaryAddress: {
      type: String,
      required: true,
      unique: true,
    },
    secondaryAddress: {
      type: String,
      required: true,
    },
    officialEmail: {
      type: String,
      required: true,
      unique: true,
    },
    personalEmail: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    dateOfJoining: {
      type: String,
      required: true,
    },
    dateOfReleiving: {
      type: String,
      required: true,
    },
    documents: {
      type: Array,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    permissions: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
