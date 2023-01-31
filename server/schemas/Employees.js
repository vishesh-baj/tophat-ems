import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  { firstName: String, required: true },
  { lastName: String, required: true },
  { primaryContactNumber: String, required: true, unique: true },
  { secondaryContactNumber: String, required: true },
  { primaryAddress: String, required: true, unique: true },
  { secondaryAddress: String, required: true },
  { officialEmail: String, required: true, unique: true },
  { personalEmail: String, required: true },
  { dateOfBirth: String, required: true },
  { designation: String, required: true },
  { department: String, required: true },
  { experience: String, required: true },
  { dateOfJoining: String, required: true },
  { dateOfReliving: String },
  { role: String, required: true },
  { documents: [], required: true }
);

const Employee = mongoose.modal("Employee", employeeSchema);
export default Employee;
