import Doctor from '../models/Doctor.js';

export const getDoctors = async (req, res) => {
  const doctors = await Doctor.find().populate('hospitals');
  res.json(doctors);
};

export const createDoctor = async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  res.status(201).json(doctor);
};

export const assignHospitals = async (req, res) => {
  const { hospitalIds } = req.body;
  const doctor = await Doctor.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { hospitals: { $each: hospitalIds } } },
    { new: true }
  );
  res.json(doctor);
};
