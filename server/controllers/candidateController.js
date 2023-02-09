const Candidates = require("../schemas/Candidate");

const getAllCandidates = async (req, res) => {
  try {
    const candidatesList = await Candidates.find({});
    if (candidatesList.length === 0)
      res.status(204).json({ message: "No candidates found", candidatesList });
    res
      .status(200)
      .json({ message: "fetched candidates successfully.", candidatesList });
  } catch (error) {
    res.status(400).json({ message: "An error occured", error: error.message });
  }
};

const addCandidate = async (req, res) => {
  try {
    const candidatePayload = req.body;
    const candidateExists = await Candidates.findOne({
      personalEmail: candidatePayload.personalEmail,
    });

    if (candidateExists)
      return res.status(400).json({ message: "Candidate already exists" });
    const newCandidate = new Candidates(candidatePayload);
    const savedCandidate = await newCandidate.save();
    res
      .status(200)
      .json({ message: "Candidate added successfully", savedCandidate });
  } catch (error) {
    res.status(400).json({ message: "Error occured", error: error.message });
  }
};

const editCandidate = async (req, res) => {
  try {
    const candidateId = req.params.id;
    const editedPayload = req.body;
    const candidateExists = await Candidates.findById(candidateId);
    if (!candidateExists)
      return res.status(400).json({ message: "Candidate doesnt exist" });
    const candidateToBeChanged = await Candidates.findByIdAndUpdate(
      candidateId,
      editedPayload
    );
    const changedCandidate = await candidateToBeChanged.save();
    res
      .status(200)
      .json({ message: "Candidate changed successfully", changedCandidate });
  } catch (error) {
    res.status(400).json({ message: "Error occured", error: error.message });
  }
};

const deleteCandidate = async (req, res) => {
  const candidateId = req.params.id;
  const candidateToBeDeleted = await Candidates.findByIdAndDelete(candidateId);
  if (!candidateToBeDeleted)
    res.status(400).json({ message: "Candidate doesnot exist" });
  res.status(200).json({ message: "candidate deleted", candidateToBeDeleted });
};

module.exports = {
  candidateController: {
    getAllCandidates,
    addCandidate,
    editCandidate,
    deleteCandidate,
  },
};
