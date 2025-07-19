import mongoose from 'mongoose';

const academicCreditSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College',
    required: true
  },
  credits: {
    type: Number,
    default: 0
  },
  issuedOn: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const AcademicCredit = mongoose.model('AcademicCredit', academicCreditSchema);
export default AcademicCredit;
