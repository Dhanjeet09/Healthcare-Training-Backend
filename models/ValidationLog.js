import mongoose from 'mongoose';

const validationLogSchema = new mongoose.Schema({
  certificate: { type: mongoose.Schema.Types.ObjectId, ref: 'Certificate' },
  validatedBy: String,
  validatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('ValidationLog', validationLogSchema);
