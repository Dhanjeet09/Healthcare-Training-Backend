import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: String,
  isCoreFaculty: { type: Boolean, default: false },
  hospitals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' }]
});

export default mongoose.model('Doctor', doctorSchema);
