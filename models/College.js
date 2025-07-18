import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  contactEmail: String
});

export default mongoose.model('College', collegeSchema);
