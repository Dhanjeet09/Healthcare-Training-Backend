import express from 'express';
import {
  getDoctors,
  createDoctor,
  assignHospitals
} from '../controllers/doctorController.js';

const router = express.Router();

router.get('/', getDoctors);
router.post('/', createDoctor);
router.post('/:id/assign-hospitals', assignHospitals);

export default router;
