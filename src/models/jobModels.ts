import { Sequelize, DataTypes, Model } from 'sequelize';

// Initialize Sequelize instance with direct credentials
const sequelize = new Sequelize(
    'sql12757484', // Database name
    'sql12757484', // Database username
    'iz1vLCTsrk', // Database password
    {
        host: 'sql12.freesqldatabase.com', // Database host
        port: 3306, // Database port
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
