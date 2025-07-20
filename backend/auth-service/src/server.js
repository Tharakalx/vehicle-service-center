
import express from'express';

import db from './config/db.js'; // Assuming db.js exports the pool
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Auth API is running');
});

// Insert user (demo)
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
            [username, password]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to register user' });
    }
});

app.listen(process.env.PORT || 4000, () => {
    console.log("server is running on port " + (process.env.PORT || 4000));
});



