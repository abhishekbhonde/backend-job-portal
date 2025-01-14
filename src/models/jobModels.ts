import { Sequelize, DataTypes, Model } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
        host: process.env.DB_HOST!,
        dialect: 'mysql',
    }
);

class Job extends Model {}

Job.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.STRING, allowNull: false },
        company: { type: DataTypes.STRING, allowNull: false },
        location: { type: DataTypes.STRING },
        salary: { type: DataTypes.DECIMAL(10, 2) },
        description: { type: DataTypes.TEXT },
    },
    {
        sequelize,
        modelName: 'Job',
        tableName: 'jobs',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: false,
    }
);

export default Job;
export { sequelize };
