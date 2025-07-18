import express from 'express';
import { getValidationLogs } from '../controllers/validationController.js';

const router = express.Router();

router.get('/', getValidationLogs);

export default router;
