import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import healthRoutes from './routes/healthRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import Service from './models/Service.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Database Initialization & Seeding
const initDB = async () => {
    try {
        // Create schema if it doesn't exist
        await sequelize.query('CREATE SCHEMA IF NOT EXISTS "pcrepair";');

        await sequelize.sync({ force: false }); // Change to true if you want to reset DB
        console.log('Database connected & synced');

        // Optional: Seed initial services if table is empty
        const count = await Service.count();
        if (count === 0) {
            const initialServices = [
                { title: 'Laptop Repair', description: 'Screen replacements, battery issues, and motherboard diagnostics.', icon: 'LaptopMedical' },
                { title: 'Custom Builds', description: 'High-performance gaming rigs and workstations.', icon: 'Microchip' },
                { title: 'Data Recovery', description: 'Recovering lost files from corrupted drives.', icon: 'Hdd' },
                { title: 'Network Setup', description: 'Home and office networking, routers, and firewalls.', icon: 'NetworkWired' },
                { title: 'Server Maintenance', description: 'Enterprise server setup and routine health checks.', icon: 'Server' },
                { title: 'General Diagnostics', description: 'Not sure what is wrong? We will find the issue.', icon: 'Tools' }
            ];
            await Service.bulkCreate(initialServices);
            console.log('Database seeded with initial services');
        }
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

initDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
