const Candidates = require("../schemas/Candidate");

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

const editCandidate = async (req,res) => {
    
};

module.exports = {
  candidateController: {
    addCandidate,
  },
};
