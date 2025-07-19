import express from 'express';
import { validateCertificate, getValidationLogs } from '../controllers/validationController.js';
const router = express.Router();

router.post('/check', validateCertificate);
router.get('/', getValidationLogs);

export default router;
