# Cinema+ Project Setup Guide

## Prerequisites

Before you start, make sure you have the following installed:
- **Node.js** (v12 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.0 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** (comes with Node.js)

## Step 1: Install MongoDB

### Windows
1. Download MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Run the installer and follow the installation wizard
3. MongoDB will be installed as a Windows Service and start automatically
4. Verify installation by opening Command Prompt and running:
   ```bash
   mongod --version
   ```

### macOS
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux (Ubuntu)
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
```

## Step 2: Clone and Setup Project

```bash
# Navigate to project directory
cd PROJECT

# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
cd ..
```

## Step 3: Configure Environment Variables

### Server Configuration
Create `server/.env` file (already created, but verify):
```
GMAIL_USER = "your-email@gmail.com"
GMAIL_PASSWORD = "your-app-password"
MONGODB_URI = "mongodb://localhost:27017/cinema-plus"
PORT = 8080
NODE_ENV = "development"
```

### Client Configuration
Create `client/.env` file:
```
REACT_APP_API_URL = "http://localhost:8080"
```

## Step 4: Seed Database with Mock Data

The project includes a seed script that populates the database with realistic mock data.

### Run the Seed Script

```bash
# From the server directory
cd server
npm run seed
```

Or from the root directory:
```bash
cd server && npm run seed
```

### What Gets Seeded

The seed script creates:
- **5 Users** (2 admins, 3 guests)
- **6 Movies** (various genres)
- **5 Cinemas** (across Vietnam)
- **30 Showtimes** (combinations of movies and cinemas)
- **10 Reservations** (random bookings)

### Sample User Credentials

After seeding, you can login with:

**Admin Account:**
- Username: `nguyenvana`
- Email: `nguyenvana@email.com`
- Password: `password123`

**Guest Account:**
- Username: `tranthib`
- Email: `tranthib@email.com`
- Password: `password123`

## Step 5: Start the Application

### Option 1: Start Both Server and Client (Recommended)

From the root directory:
```bash
# Terminal 1 - Start Server
npm run server

# Terminal 2 - Start Client
npm run client
```

### Option 2: Start Individually

**Start Server:**
```bash
cd server
npm run dev
```

**Start Client (in another terminal):**
```bash
cd client
npm start
```

## Step 6: Access the Application

Once both server and client are running:

- **Client**: http://localhost:3000
- **Server API**: http://localhost:8080
- **MongoDB**: mongodb://localhost:27017/cinema-plus

## Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Make sure MongoDB is running
```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongodb
```

### Port Already in Use
If port 8080 or 3000 is already in use, you can change it:
- Server: Edit `server/.env` and change `PORT`
- Client: Set `PORT=3001` before running `npm start`

### Dependencies Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

### Seed Script Fails
```bash
# Make sure MongoDB is running
# Check .env file has correct MONGODB_URI
# Try running seed again
cd server
npm run seed
```

## Project Structure

```
cinema-plus/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable components
│   │   ├── store/         # Redux store
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                # Express backend
│   ├── src/
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── seeds/         # Database seeding
│   │   └── db/            # Database connection
│   ├── .env               # Environment variables
│   └── package.json
├── mockData.js            # Mock data generator
└── README.md
```

## Features

- ✅ Online Movie Ticket Booking
- ✅ Admin Dashboard
- ✅ User Management
- ✅ Cinema Management
- ✅ Movie Management
- ✅ Showtime Management
- ✅ Reservation System
- ✅ QR Code Generation
- ✅ Email Notifications
- ✅ Dark Theme UI

## API Endpoints

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users` - Get all users (admin)
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Movies
- `GET /api/movies` - Get all movies
- `POST /api/movies` - Create movie (admin)
- `PUT /api/movies/:id` - Update movie (admin)
- `DELETE /api/movies/:id` - Delete movie (admin)

### Cinemas
- `GET /api/cinemas` - Get all cinemas
- `POST /api/cinemas` - Create cinema (admin)
- `PUT /api/cinemas/:id` - Update cinema (admin)
- `DELETE /api/cinemas/:id` - Delete cinema (admin)

### Showtimes
- `GET /api/showtimes` - Get all showtimes
- `POST /api/showtimes` - Create showtime (admin)
- `PUT /api/showtimes/:id` - Update showtime (admin)
- `DELETE /api/showtimes/:id` - Delete showtime (admin)

### Reservations
- `GET /api/reservations` - Get all reservations
- `POST /api/reservations` - Create reservation
- `PUT /api/reservations/:id` - Update reservation
- `DELETE /api/reservations/:id` - Cancel reservation

## Next Steps

1. ✅ Install dependencies
2. ✅ Configure environment variables
3. ✅ Seed database with mock data
4. ✅ Start server and client
5. Login with provided credentials
6. Explore the admin dashboard
7. Create, update, and delete movies, cinemas, and showtimes
8. Make reservations and generate QR codes

## Support

For issues or questions, please refer to the [GitHub Issues](https://github.com/georgesimos/cinema-plus/issues) page.

## License

MIT License - See LICENSE file for details
