import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
db.connectDB();

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Vehicle Service Booking API' });
});

// Booking routes
app.use('/api/bookings', bookingRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Booking Service is running on port ${PORT}`);
});

export default app;


