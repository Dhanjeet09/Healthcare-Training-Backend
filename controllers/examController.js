import Exam from '../models/Exam.js';

export const createExamResult = async (req, res) => {
  try {
    const exam = await Exam.create(req.body);
    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getExamResults = async (req, res) => {
  try {
    const results = await Exam.find().populate('student program');
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
