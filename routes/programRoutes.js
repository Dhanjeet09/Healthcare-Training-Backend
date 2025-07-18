import express from 'express';
import {
  getPrograms,
  createProgram
} from '../controllers/programController.js';

const router = express.Router();

router.get('/', getPrograms);
router.post('/', createProgram);

export default router;
