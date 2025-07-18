import ValidationLog from '../models/ValidationLog.js';

export const getValidationLogs = async (req, res) => {
  const logs = await ValidationLog.find().populate('certificate');
  res.json(logs);
};
