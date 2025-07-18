import Certificate from '../models/Certificate.js';
import ValidationLog from '../models/ValidationLog.js';
import Student from '../models/Student.js';
import generateCertificateId from '../utils/generateCertificateId.js';

export const issueCertificate = async (req, res) => {
  const { studentId } = req.params;
  const uniqueId = generateCertificateId();

  const cert = await Certificate.create({ student: studentId, uniqueId });
  await Student.findByIdAndUpdate(studentId, { certificate: cert._id });

  res.status(201).json(cert);
};

export const validateCertificate = async (req, res) => {
  const { uniqueId } = req.params;
  const { validatedBy } = req.query;

  const cert = await Certificate.findOne({ uniqueId }).populate('student');
  if (!cert) return res.status(404).json({ message: 'Invalid certificate ID' });

  await ValidationLog.create({ certificate: cert._id, validatedBy });

  res.json({ valid: true, student: cert.student });
};

export const getAllCertificates = async (req, res) => {
  const certs = await Certificate.find().populate('student');
  res.json(certs);
};
