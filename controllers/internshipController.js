import Internship from '../models/Internship.js';

export const assignInternship = async (req, res) => {
  try {
    const internship = await Internship.create(req.body);
    res.status(201).json(internship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find()
      .populate('student doctor hospital');
    res.status(200).json(internships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
