import TrainingProgram from '../models/TrainingProgram.js';

export const getPrograms = async (req, res) => {
  const programs = await TrainingProgram.find()
    .populate('students')
    .populate('lectures')
    .populate('internships');
  res.json(programs);
};

export const createProgram = async (req, res) => {
  const program = new TrainingProgram(req.body);
  await program.save();
  res.status(201).json(program);
};
