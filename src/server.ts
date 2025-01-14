import app from './app';
import { sequelize } from './models/jobModels';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

// Sync database and start server
sequelize
    .sync()
    .then(() => {
        console.log('Database connected successfully.');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error:any) => {
        console.error('Database connection failed:', error);
    });
