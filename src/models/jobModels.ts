import { Sequelize, DataTypes, Model } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Sequelize instance
const sequelize = new Sequelize(
    process.env.DB_NAME!, // Database name
    process.env.DB_USER!, // Database username
    process.env.DB_PASSWORD!, // Database password
    {
        host: process.env.DB_HOST!, // Database host
        dialect: 'mysql', // Database dialect
        logging: false, // Disable SQL query logging
    }
);

// Define the Job model
class Job extends Model {}

Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
        },
        salary: {
            type: DataTypes.DECIMAL(10, 2),
        },
        description: {
            type: DataTypes.TEXT,
        },
    },
    {
        sequelize, // Pass the Sequelize instance
        modelName: 'Job', // Name of the model
        tableName: 'jobs', // Table name in the database
        timestamps: true, // Enable timestamps
        createdAt: 'created_at', // Rename createdAt to created_at
        updatedAt: false, // Disable updatedAt
    }
);

// Export the Job model and Sequelize instance
export default Job;
export { sequelize };
