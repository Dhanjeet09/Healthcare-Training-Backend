import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  uniqueId: { type: String, unique: true },
  issuedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Certificate', certificateSchema);
