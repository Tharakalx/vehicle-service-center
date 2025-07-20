import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    logging: false, // Disable query logging for cleaner output
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL');
    await sequelize.sync(); // Sync models with database
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }
};

export default { sequelize, connectDB };