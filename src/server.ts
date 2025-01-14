import app from './app'; // Import the Express application
import { sequelize } from './models/jobModels'; // Import the Sequelize instance
import dotenv from 'dotenv'; // Import dotenv for environment variable management

// Load environment variables from .env file
dotenv.config();

// Define the port for the server
const PORT = process.env.PORT || 3000;

// Sync the database and start the server
sequelize
    .authenticate() // Test the database connection
    .then(() => {
        console.log('Database connected successfully.');
        return sequelize.sync(); // Sync models with the database
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((error: any) => {
        console.error('Database connection failed:', error);
    });
