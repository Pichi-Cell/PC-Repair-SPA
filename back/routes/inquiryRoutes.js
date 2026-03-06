import express from 'express';
import { getAllInquiries, createInquiry } from '../controllers/inquiryController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getAllInquiries);
router.post('/', createInquiry);

export default router;
