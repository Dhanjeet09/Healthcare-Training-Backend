import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
 student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  program: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
  certificateNumber: { type: String, unique: true, required: true },
  issuedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Certificate', certificateSchema);
