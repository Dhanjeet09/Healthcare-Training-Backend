import express from 'express';
import { createExamResult, getExamResults } from '../controllers/examController.js';
const router = express.Router();

router.post('/', createExamResult);
router.get('/', getExamResults);

export default router;
