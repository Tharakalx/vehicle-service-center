# Vehicle Service Booking Microservice

This microservice handles the booking functionality for the Vehicle Service Management System.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Create a `.env` file with the following variables:
```env
DB_NAME=vehicle_booking_db
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
PORT=5002
```

3. Create PostgreSQL database:
```sql
CREATE DATABASE vehicle_booking_db;
```

4. Start the service:
```bash
npm start
```

## API Endpoints

### Bookings

- **Create Booking**
  - POST `/api/bookings`
  - Body: 
    ```json
    {
      "customerName": "John Doe",
      "vehicleType": "Car",
      "serviceType": "Oil Change",
      "bookingDate": "2023-06-20T10:00:00Z",
      "status": "pending"
    }
    ```

- **Get All Bookings**
  - GET `/api/bookings`

- **Get Booking by ID**
  - GET `/api/bookings/:id`

- **Update Booking**
  - PUT `/api/bookings/:id`
  - Body: Same as create booking

- **Delete Booking**
  - DELETE `/api/bookings/:id`

## Database Schema

### Booking Model
```javascript
{
  id: INTEGER (Primary Key, Auto Increment),
  customerName: STRING (Required),
  vehicleType: STRING (Required),
  serviceType: STRING (Required),
  bookingDate: DATE (Required),
  status: ENUM ['pending', 'confirmed', 'completed', 'cancelled'],
  createdAt: TIMESTAMP
}
```