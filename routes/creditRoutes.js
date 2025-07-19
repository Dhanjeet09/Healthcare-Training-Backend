import express from 'express';
import { issueCredit, getCredits } from '../controllers/creditController.js';
const router = express.Router();

router.post('/', issueCredit);
router.get('/', getCredits);

export default router;
