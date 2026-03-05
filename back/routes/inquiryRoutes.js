import express from 'express';
import { getAllInquiries, createInquiry } from '../controllers/inquiryController.js';

const router = express.Router();

router.get('/', getAllInquiries);
router.post('/', createInquiry);

export default router;
