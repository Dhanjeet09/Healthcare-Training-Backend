import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' },
  startDate: Date,
  endDate: Date,
});

export default mongoose.model('Internship', internshipSchema);
