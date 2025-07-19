import mongoose from 'mongoose';

const examSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TrainingProgram',
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  passed: {
    type: Boolean,
    required: true
  },
  examDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Exam = mongoose.model('Exam', examSchema);
export default Exam;
