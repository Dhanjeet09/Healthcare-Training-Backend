import mongoose from 'mongoose';

const lectureSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  date: { type: Date, required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  isGuestLecture: { type: Boolean, default: false }
});

export default mongoose.model('Lecture', lectureSchema);
