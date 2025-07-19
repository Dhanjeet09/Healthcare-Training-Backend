import ValidationLog from '../models/ValidationLog.js';
import Certificate from '../models/Certificate.js';

export const validateCertificate = async (req, res) => {
  const { certificateNumber, checkedBy } = req.body;

  try {
    const certificate = await Certificate.findOne({ certificateNumber });

    if (!certificate)
      return res.status(404).json({ message: 'Certificate not found' });

    const log = await ValidationLog.create({
      certificate: certificate._id,
      checkedBy
    });

    res.status(200).json({
      valid: true,
      student: certificate.student,
      program: certificate.program,
      validationId: log._id,
      checkedAt: log.checkedAt
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getValidationLogs = async (req, res) => {
  try {
    const logs = await ValidationLog.find().populate('certificate');
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
