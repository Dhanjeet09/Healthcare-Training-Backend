import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';

import hospitalRoutes from './routes/hospitalRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import collegeRoutes from './routes/collegeRoutes.js';
import programRoutes from './routes/programRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';
import validationRoutes from './routes/validationRoutes.js';
import examRoutes from './routes/examRoutes.js';
import internshipRoutes from './routes/internshipRoutes.js';
import creditRoutes from './routes/creditRoutes.js';

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('🎉 Healthcare Training API is running');
});
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/colleges', collegeRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/validations', validationRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/credits', creditRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
