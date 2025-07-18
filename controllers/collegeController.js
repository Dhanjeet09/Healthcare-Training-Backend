import College from '../models/College.js';

export const getColleges = async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
};

export const createCollege = async (req, res) => {
  const college = new College(req.body);
  await college.save();
  res.status(201).json(college);
};
