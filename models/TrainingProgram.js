import mongoose from 'mongoose';

const trainingProgramSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startDate: Date,
  endDate: Date,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }],
  internships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Internship' }],
});

export default mongoose.model('TrainingProgram', trainingProgramSchema);
