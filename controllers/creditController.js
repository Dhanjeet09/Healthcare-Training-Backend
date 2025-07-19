import AcademicCredit from '../models/AcademicCredit.js';

export const issueCredit = async (req, res) => {
  try {
    const credit = await AcademicCredit.create(req.body);
    res.status(201).json(credit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCredits = async (req, res) => {
  try {
    const credits = await AcademicCredit.find().populate('student college');
    res.status(200).json(credits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
