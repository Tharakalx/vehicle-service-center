import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Booking = db.sequelize.define('Booking', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    vehicleId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    serviceDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    serviceType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'completed', 'cancelled'),
        defaultValue: 'pending'
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true
});

export default Booking;