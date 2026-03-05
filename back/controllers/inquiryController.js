import Inquiry from '../models/Inquiry.js';

export const getAllInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.findAll({ order: [['createdAt', 'DESC']] });
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ error: 'Server error while fetching inquiries' });
    }
};

export const createInquiry = async (req, res) => {
    try {
        const inquiry = await Inquiry.create(req.body);
        res.status(201).json(inquiry);
    } catch (error) {
        res.status(400).json({ error: 'Invalid inquiry data' });
    }
};
