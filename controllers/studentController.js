import Student from '../models/Student.js';

export const getStudents = async (req, res) => {
  const students = await Student.find()
    .populate('college')
    .populate('program')
    .populate('certificate');
  res.json(students);
};

export const createStudent = async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
};
