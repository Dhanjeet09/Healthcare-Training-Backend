import mongoose from 'mongoose';

const validationLogSchema = new mongoose.Schema({
  certificate: { type: mongoose.Schema.Types.ObjectId, ref: 'Certificate', required: true },
  checkedBy: { type: String, required: true },
  checkedAt: { type: Date, default: Date.now }
});

export default mongoose.model('ValidationLog', validationLogSchema);
