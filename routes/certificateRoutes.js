import express from 'express';
import { issueCertificate, getCertificates } from '../controllers/certificateController.js';
const router = express.Router();

router.post('/', issueCertificate);
router.get('/', getCertificates);

export default router;
