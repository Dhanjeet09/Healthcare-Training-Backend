import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';

import Hospital from '../models/Hospital.js';
import Doctor from '../models/Doctor.js';
import Student from '../models/Student.js';
import College from '../models/College.js';
import Program from '../models/Program.js';
import Exam from '../models/Exam.js';
import Internship from '../models/Internship.js';
import AcademicCredit from '../models/AcademicCredit.js';

dotenv.config();
await connectDB();

// Clear existing data
await Promise.all([
  Hospital.deleteMany(),
  Doctor.deleteMany(),
  Student.deleteMany(),
  College.deleteMany(),
  Program.deleteMany(),
  Exam.deleteMany(),
  Internship.deleteMany(),
  AcademicCredit.deleteMany(),
]);

// Seed Hospitals
const hospitals = await Hospital.insertMany([
  { name: 'City Care Hospital', address: 'Pune Camp' },
  { name: 'Metro Health', address: 'Baner' }
]);

// Seed Doctors
const doctors = await Doctor.insertMany([
  { name: 'Dr. Mehta', isCoreFaculty: true, hospitals: [hospitals[0]._id] },
  { name: 'Dr. Khan', isCoreFaculty: false, hospitals: [hospitals[1]._id] }
]);

// Seed Colleges
const colleges = await College.insertMany([
  { name: 'Pune Medical College', address: 'Shivaji Nagar' },
  { name: 'Sinhgad Medical College', address: 'Vadgaon' }
]);

// Seed Students
const students = await Student.insertMany([
  { name: 'Amit Sharma', email: 'amit@example.com', college: colleges[0]._id },
  { name: 'Sneha Desai', email: 'sneha@example.com', college: colleges[1]._id }
]);

// Seed Training Programs
const programs = await Program.insertMany([
  {
    name: 'Nursing Foundation Program',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
    students: [students[0]._id, students[1]._id],
    faculty: [doctors[0]._id],
    guestLecturers: [doctors[1]._id]
  }
]);

// Seed Exam Results
await Exam.insertMany([
  {
    student: students[0]._id,
    program: programs[0]._id,
    score: 85,
    passed: true
  },
  {
    student: students[1]._id,
    program: programs[0]._id,
    score: 90,
    passed: true
  }
]);

// Seed Internships
await Internship.insertMany([
  {
    student: students[0]._id,
    doctor: doctors[0]._id,
    hospital: hospitals[0]._id,
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-12-31')
  },
  {
    student: students[1]._id,
    doctor: doctors[1]._id,
    hospital: hospitals[1]._id,
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-12-31')
  }
]);

// Seed Academic Credits
await AcademicCredit.insertMany([
  {
    student: students[0]._id,
    college: colleges[0]._id,
    creditsEarned: 20
  },
  {
    student: students[1]._id,
    college: colleges[1]._id,
    creditsEarned: 22
  }
]);

console.log('✅ All Seed Data Inserted!');
process.exit();
