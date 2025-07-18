import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
  program: { type: mongoose.Schema.Types.ObjectId, ref: 'TrainingProgram' },
  examScore: Number,
  academicCredits: Number,
  certificate: { type: mongoose.Schema.Types.ObjectId, ref: 'Certificate' }
});

export default mongoose.model('Student', studentSchema);
