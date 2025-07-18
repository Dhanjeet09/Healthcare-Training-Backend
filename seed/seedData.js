// scripts/seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';

import Hospital from '../models/Hospital.js';
import Doctor from '../models/Doctor.js';
import Student from '../models/Student.js';
import College from '../models/College.js';

dotenv.config();

await connectDB();

// Clear existing data
await Hospital.deleteMany();
await Doctor.deleteMany();
await Student.deleteMany();
await College.deleteMany();

// Insert Hospitals
const hospitals = await Hospital.insertMany([
  { name: 'Ruby Hall Clinic', address: 'Sassoon Road, Pune', contactNumber: '02026163391' },
  { name: 'Jehangir Hospital', address: 'Bund Garden Road, Pune', contactNumber: '02066819999' }
]);

// Insert Doctors
const doctors = await Doctor.insertMany([
  { name: 'Dr. Anjali Deshmukh', specialization: 'Pediatrics', isCoreFaculty: true, hospitals: [hospitals[0]._id] },
  { name: 'Dr. Rohit Patil', specialization: 'General Surgery', isCoreFaculty: false, hospitals: [hospitals[1]._id] }
]);

// Insert Colleges
const colleges = await College.insertMany([
  { name: 'Sinhgad Nursing College', address: 'Vadgaon, Pune', contactEmail: 'info@sinhgadnursing.edu' },
  { name: 'Bharati Vidyapeeth Nursing College', address: 'Katraj, Pune', contactEmail: 'contact@bvpnc.edu' }
]);

// Insert Students
await Student.insertMany([
  { name: 'Sneha Kulkarni', email: 'sneha.kulkarni@example.com', college: colleges[0]._id },
  { name: 'Vishal Jadhav', email: 'vishal.jadhav@example.com', college: colleges[1]._id }
]);

console.log('✅ Seed data inserted');
process.exit();
