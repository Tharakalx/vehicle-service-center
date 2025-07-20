
import Pool from "pg";
// Use environment variables for config
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Simple function to test the connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error connecting to DB:', err.stack);
  }
  console.log('Connected to PostgreSQL DB');
  release();
});

export default pool;
