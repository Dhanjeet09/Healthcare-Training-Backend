import Certificate from '../models/Certificate.js';

export const issueCertificate = async (req, res) => {
  const { student, program } = req.body;

  try {
    const existing = await Certificate.findOne({ student, program });
    if (existing) return res.status(400).json({ message: 'Certificate already issued' });

    const certificateNumber = `CERT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const certificate = await Certificate.create({
      student,
      program,
      certificateNumber
    });

    res.status(201).json(certificate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCertificates = async (req, res) => {
  try {
    const certs = await Certificate.find().populate('student program');
    res.json(certs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};