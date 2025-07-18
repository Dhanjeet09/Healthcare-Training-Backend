import express from 'express';
import {
  issueCertificate,
  validateCertificate,
  getAllCertificates
} from '../controllers/certificateController.js';

const router = express.Router();

router.post('/issue/:studentId', issueCertificate);
router.get('/validate/:uniqueId', validateCertificate);
router.get('/', getAllCertificates);

export default router;
