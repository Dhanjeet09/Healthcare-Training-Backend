import Hospital from '../models/Hospital.js';

export const getHospitals = async (req, res) => {
  const hospitals = await Hospital.find();
  res.json(hospitals);
};

export const createHospital = async (req, res) => {
  const hospital = new Hospital(req.body);
  await hospital.save();
  res.status(201).json(hospital);
};
