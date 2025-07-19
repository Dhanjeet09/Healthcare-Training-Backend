import express from 'express';
import { assignInternship, getAllInternships } from '../controllers/internshipController.js';
const router = express.Router();

router.post('/', assignInternship);
router.get('/', getAllInternships);

export default router;
