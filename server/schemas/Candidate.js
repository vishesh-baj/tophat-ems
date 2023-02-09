const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  personalEmail: {
    type: String,
    required: true,
    unique: true,
  },
  primaryContactNumber: {
    type: String,
    required: true,
    unique: true,
  },
  currentLocation: {
    type: String,
    required: true,
  },
  baseLocation: {
    type: String,
    required: true,
  },
  readyToRelocate: {
    type: Boolean,
    required: true,
  },
  noticePeriod: {
    type: String,
    required: true,
  },
  currentCTC: {
    type: String,
    required: true,
  },
  expectedCTC: {
    type: String,
    required: true,
  },
  communication: {
    type: String,
    required: true,
  },
  technology: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  hrInCharge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Candidate = mongoose.model("Candidate", CandidateSchema);
module.exports = Candidate;
