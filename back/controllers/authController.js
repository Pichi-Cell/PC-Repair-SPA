import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-replace-in-prod';

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
            expiresIn: '1d',
        });

        res.json({ token, user: { id: user.id, username: user.username } });
    } catch (error) {
        res.status(500).json({ error: 'Server error during login' });
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, { attributes: { exclude: ['password'] } });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
