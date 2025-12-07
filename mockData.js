/**
 * Cinema+ Mock Data Generator
 * Generates realistic mock data for the Cinema+ MERN application
 */

// ============================================================================
// MOVIES DATA
// ============================================================================
const mockMovies = [
  {
    _id: '507f1f77bcf86cd799439001',
    title: 'The Quantum Paradox',
    description: 'A mind-bending sci-fi thriller about a physicist who discovers a way to manipulate time itself.',
    genre: 'Science Fiction',
    rating: 8.5,
    duration: 148,
    releaseDate: new Date('2024-01-15'),
    posterUrl: 'https://via.placeholder.com/300x450?text=Quantum+Paradox',
    backdropUrl: 'https://via.placeholder.com/1920x1080?text=Quantum+Paradox',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Marion Cotillard', 'Ellen Page'],
    language: 'English',
    subtitles: ['Vietnamese', 'English'],
    status: 'now_showing',
    budget: 160000000,
    boxOffice: 850000000,
    imdbId: 'tt1375666'
  },
  {
    _id: '507f1f77bcf86cd799439002',
    title: 'Love in Hanoi',
    description: 'A romantic drama set in the bustling streets of Hanoi, following two souls finding love amidst chaos.',
    genre: 'Romance',
    rating: 7.8,
    duration: 125,
    releaseDate: new Date('2024-02-20'),
    posterUrl: 'https://via.placeholder.com/300x450?text=Love+in+Hanoi',
    backdropUrl: 'https://via.placeholder.com/1920x1080?text=Love+in+Hanoi',
    director: 'Tran Anh Hung',
    cast: ['Tran Thanh', 'Hari Won', 'Ngo Thanh Van'],
    language: 'Vietnamese',
    subtitles: ['English', 'Chinese'],
    status: 'now_showing',
    budget: 5000000,
    boxOffice: 25000000,
    imdbId: 'tt9876543'
  },
  {
    _id: '507f1f77bcf86cd799439003',
    title: 'Dragon\'s Legacy',
    description: 'An epic fantasy adventure featuring ancient dragons and a prophecy that will change the world.',
    genre: 'Fantasy',
    rating: 8.2,
    duration: 165,
    releaseDate: new Date('2024-03-10'),
    posterUrl: 'https://via.placeholder.com/300x450?text=Dragons+Legacy',
    backdropUrl: 'https://via.placeholder.com/1920x1080?text=Dragons+Legacy',
    director: 'Peter Jackson',
    cast: ['Henry Cavill', 'Anya Taylor-Joy', 'Tom Hiddleston'],
    language: 'English',
    subtitles: ['Vietnamese', 'English', 'Chinese'],
    status: 'coming_soon',
    budget: 250000000,
    boxOffice: 0,
    imdbId: 'tt5555555'
  },
  {
    _id: '507f1f77bcf86cd799439004',
    title: 'Midnight Heist',
    description: 'A thrilling crime thriller about a master thief planning the ultimate heist in a sprawling metropolis.',
    genre: 'Thriller',
    rating: 7.9,
    duration: 138,
    releaseDate: new Date('2024-01-25'),
    posterUrl: 'https://via.placeholder.com/300x450?text=Midnight+Heist',
    backdropUrl: 'https://via.placeholder.com/1920x1080?text=Midnight+Heist',
    director: 'Denis Villeneuve',
    cast: ['Tom Hardy', 'Charlize Theron', 'Oscar Isaac'],
    language: 'English',
    subtitles: ['Vietnamese', 'English'],
    status: 'now_showing',
    budget: 120000000,
    boxOffice: 450000000,
    imdbId: 'tt4444444'
  },
  {
    _id: '507f1f77bcf86cd799439005',
    title: 'Laughter & Tears',
    description: 'A heartwarming comedy-drama about a dysfunctional family reuniting for one unforgettable summer.',
    genre: 'Comedy',
    rating: 7.5,
    duration: 115,
    releaseDate: new Date('2024-02-05'),
    posterUrl: 'https://via.placeholder.com/300x450?text=Laughter+Tears',
    backdropUrl: 'https://via.placeholder.com/1920x1080?text=Laughter+Tears',
    director: 'Judd Apatow',
    cast: ['Will Ferrell', 'Kristen Wiig', 'Adam Sandler'],
    language: 'English',
    subtitles: ['Vietnamese', 'English'],
    status: 'now_showing',
    budget: 45000000,
    boxOffice: 180000000,
    imdbId: 'tt3333333'
  },
  {
    _id: '507f1f77bcf86cd799439006',
    title: 'The Last Guardian',
    description: 'An action-packed superhero film where the final guardian must save humanity from extinction.',
    genre: 'Action',
    rating: 8.1,
    duration: 155,
    releaseDate: new Date('2024-04-01'),
    posterUrl: 'https://via.placeholder.com/300x450?text=Last+Guardian',
    backdropUrl: 'https://via.placeholder.com/1920x1080?text=Last+Guardian',
    director: 'Russo Brothers',
    cast: ['Chris Hemsworth', 'Scarlett Johansson', 'Mark Ruffalo'],
    language: 'English',
    subtitles: ['Vietnamese', 'English', 'Chinese'],
    status: 'coming_soon',
    budget: 300000000,
    boxOffice: 0,
    imdbId: 'tt2222222'
  }
];

// ============================================================================
// CINEMAS DATA
// ============================================================================
const mockCinemas = [
  {
    _id: '607f1f77bcf86cd799439001',
    name: 'CGV Vincom Hanoi',
    address: '191 Ba Trieu, Hoan Kiem, Hanoi',
    city: 'Hanoi',
    phone: '+84 24 3936 0000',
    email: 'cgv.hanoi@cgv.vn',
    website: 'https://www.cgv.vn',
    imageUrl: 'https://via.placeholder.com/400x300?text=CGV+Vincom',
    totalScreens: 8,
    totalSeats: 1200,
    facilities: ['IMAX', 'Dolby Atmos', 'Reclining Seats', 'Wheelchair Access'],
    parkingAvailable: true,
    restaurantAvailable: true,
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    _id: '607f1f77bcf86cd799439002',
    name: 'Lotte Cinema Hanoi',
    address: '54 Ly Thai To, Hoan Kiem, Hanoi',
    city: 'Hanoi',
    phone: '+84 24 3933 6688',
    email: 'info@lottecinemashanoi.vn',
    website: 'https://www.lottecinemashanoi.vn',
    imageUrl: 'https://via.placeholder.com/400x300?text=Lotte+Cinema',
    totalScreens: 10,
    totalSeats: 1500,
    facilities: ['4DX', 'Dolby Atmos', 'Premium Seats', 'VIP Lounge'],
    parkingAvailable: true,
    restaurantAvailable: true,
    createdAt: new Date('2023-02-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    _id: '607f1f77bcf86cd799439003',
    name: 'BHD Star Cineplex',
    address: '106 Nguyen Hue, District 1, Ho Chi Minh City',
    city: 'Ho Chi Minh City',
    phone: '+84 28 3821 0000',
    email: 'contact@bhdstar.vn',
    website: 'https://www.bhdstar.vn',
    imageUrl: 'https://via.placeholder.com/400x300?text=BHD+Star',
    totalScreens: 12,
    totalSeats: 1800,
    facilities: ['IMAX', '4DX', 'Dolby Atmos', 'Premium Seats', 'VIP Lounge'],
    parkingAvailable: true,
    restaurantAvailable: true,
    createdAt: new Date('2023-03-10'),
    updatedAt: new Date('2024-01-18')
  },
  {
    _id: '607f1f77bcf86cd799439004',
    name: 'Galaxy Cinema Da Nang',
    address: '72 Nguyen Hue, Da Nang',
    city: 'Da Nang',
    phone: '+84 236 3822 222',
    email: 'danang@galaxycinema.vn',
    website: 'https://www.galaxycinema.vn',
    imageUrl: 'https://via.placeholder.com/400x300?text=Galaxy+Cinema',
    totalScreens: 6,
    totalSeats: 900,
    facilities: ['Dolby Atmos', 'Reclining Seats', 'Wheelchair Access'],
    parkingAvailable: true,
    restaurantAvailable: false,
    createdAt: new Date('2023-04-05'),
    updatedAt: new Date('2024-01-10')
  },
  {
    _id: '607f1f77bcf86cd799439005',
    name: 'Megastar Cineplex',
    address: '123 Tran Hung Dao, District 5, Ho Chi Minh City',
    city: 'Ho Chi Minh City',
    phone: '+84 28 3930 1111',
    email: 'megastar@cineplex.vn',
    website: 'https://www.megastarcineplex.vn',
    imageUrl: 'https://via.placeholder.com/400x300?text=Megastar',
    totalScreens: 9,
    totalSeats: 1350,
    facilities: ['IMAX', 'Dolby Atmos', 'Premium Seats'],
    parkingAvailable: false,
    restaurantAvailable: true,
    createdAt: new Date('2023-05-12'),
    updatedAt: new Date('2024-01-12')
  }
];

// ============================================================================
// SHOWTIMES DATA
// ============================================================================
const mockShowtimes = [
  {
    _id: '707f1f77bcf86cd799439001',
    movieId: '507f1f77bcf86cd799439001',
    cinemaId: '607f1f77bcf86cd799439001',
    screenNumber: 1,
    startTime: new Date('2024-01-20T10:00:00'),
    endTime: new Date('2024-01-20T12:28:00'),
    format: '2D',
    language: 'English',
    subtitles: 'Vietnamese',
    availableSeats: 145,
    totalSeats: 200,
    price: 150000,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  },
  {
    _id: '707f1f77bcf86cd799439002',
    movieId: '507f1f77bcf86cd799439001',
    cinemaId: '607f1f77bcf86cd799439001',
    screenNumber: 2,
    startTime: new Date('2024-01-20T14:30:00'),
    endTime: new Date('2024-01-20T16:58:00'),
    format: 'IMAX',
    language: 'English',
    subtitles: 'Vietnamese',
    availableSeats: 78,
    totalSeats: 150,
    price: 200000,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  },
  {
    _id: '707f1f77bcf86cd799439003',
    movieId: '507f1f77bcf86cd799439002',
    cinemaId: '607f1f77bcf86cd799439002',
    screenNumber: 3,
    startTime: new Date('2024-01-20T19:00:00'),
    endTime: new Date('2024-01-20T21:05:00'),
    format: '2D',
    language: 'Vietnamese',
    subtitles: 'English',
    availableSeats: 120,
    totalSeats: 180,
    price: 140000,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  },
  {
    _id: '707f1f77bcf86cd799439004',
    movieId: '507f1f77bcf86cd799439004',
    cinemaId: '607f1f77bcf86cd799439003',
    screenNumber: 5,
    startTime: new Date('2024-01-20T21:30:00'),
    endTime: new Date('2024-01-21T00:08:00'),
    format: '4DX',
    language: 'English',
    subtitles: 'Vietnamese',
    availableSeats: 45,
    totalSeats: 120,
    price: 250000,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  },
  {
    _id: '707f1f77bcf86cd799439005',
    movieId: '507f1f77bcf86cd799439005',
    cinemaId: '607f1f77bcf86cd799439004',
    screenNumber: 2,
    startTime: new Date('2024-01-20T16:00:00'),
    endTime: new Date('2024-01-20T17:55:00'),
    format: '2D',
    language: 'English',
    subtitles: 'Vietnamese',
    availableSeats: 89,
    totalSeats: 150,
    price: 130000,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  }
];

// ============================================================================
// USERS DATA
// ============================================================================
const mockUsers = [
  {
    _id: '807f1f77bcf86cd799439001',
    firstName: 'Nguyen',
    lastName: 'Van A',
    email: 'nguyenvana@email.com',
    phone: '+84 912 345 678',
    password: '$2a$10$hashedpassword1', // bcrypt hashed
    role: 'admin',
    avatar: 'https://via.placeholder.com/150?text=Nguyen+Van+A',
    dateOfBirth: new Date('1990-05-15'),
    gender: 'Male',
    address: '123 Tran Hung Dao, Hanoi',
    city: 'Hanoi',
    country: 'Vietnam',
    isActive: true,
    createdAt: new Date('2023-01-10'),
    updatedAt: new Date('2024-01-15'),
    lastLogin: new Date('2024-01-20T10:30:00')
  },
  {
    _id: '807f1f77bcf86cd799439002',
    firstName: 'Tran',
    lastName: 'Thi B',
    email: 'tranthib@email.com',
    phone: '+84 923 456 789',
    password: '$2a$10$hashedpassword2',
    role: 'user',
    avatar: 'https://via.placeholder.com/150?text=Tran+Thi+B',
    dateOfBirth: new Date('1995-08-22'),
    gender: 'Female',
    address: '456 Ly Thai To, Hanoi',
    city: 'Hanoi',
    country: 'Vietnam',
    isActive: true,
    createdAt: new Date('2023-03-20'),
    updatedAt: new Date('2024-01-18'),
    lastLogin: new Date('2024-01-20T14:15:00')
  },
  {
    _id: '807f1f77bcf86cd799439003',
    firstName: 'Pham',
    lastName: 'Van C',
    email: 'phamvanc@email.com',
    phone: '+84 934 567 890',
    password: '$2a$10$hashedpassword3',
    role: 'user',
    avatar: 'https://via.placeholder.com/150?text=Pham+Van+C',
    dateOfBirth: new Date('1992-12-10'),
    gender: 'Male',
    address: '789 Nguyen Hue, Ho Chi Minh City',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    isActive: true,
    createdAt: new Date('2023-05-15'),
    updatedAt: new Date('2024-01-19'),
    lastLogin: new Date('2024-01-20T09:45:00')
  },
  {
    _id: '807f1f77bcf86cd799439004',
    firstName: 'Hoang',
    lastName: 'Thi D',
    email: 'hoangthid@email.com',
    phone: '+84 945 678 901',
    password: '$2a$10$hashedpassword4',
    role: 'user',
    avatar: 'https://via.placeholder.com/150?text=Hoang+Thi+D',
    dateOfBirth: new Date('1998-03-25'),
    gender: 'Female',
    address: '321 Tran Hung Dao, Da Nang',
    city: 'Da Nang',
    country: 'Vietnam',
    isActive: true,
    createdAt: new Date('2023-07-08'),
    updatedAt: new Date('2024-01-17'),
    lastLogin: new Date('2024-01-20T16:20:00')
  },
  {
    _id: '807f1f77bcf86cd799439005',
    firstName: 'Le',
    lastName: 'Van E',
    email: 'levane@email.com',
    phone: '+84 956 789 012',
    password: '$2a$10$hashedpassword5',
    role: 'admin',
    avatar: 'https://via.placeholder.com/150?text=Le+Van+E',
    dateOfBirth: new Date('1988-11-30'),
    gender: 'Male',
    address: '654 Ly Thai To, Ho Chi Minh City',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    isActive: true,
    createdAt: new Date('2023-02-14'),
    updatedAt: new Date('2024-01-20'),
    lastLogin: new Date('2024-01-20T11:00:00')
  },
  {
    _id: '807f1f77bcf86cd799439006',
    firstName: 'Vu',
    lastName: 'Thi F',
    email: 'vuthif@email.com',
    phone: '+84 967 890 123',
    password: '$2a$10$hashedpassword6',
    role: 'user',
    avatar: 'https://via.placeholder.com/150?text=Vu+Thi+F',
    dateOfBirth: new Date('2000-06-18'),
    gender: 'Female',
    address: '987 Nguyen Hue, Hanoi',
    city: 'Hanoi',
    country: 'Vietnam',
    isActive: false,
    createdAt: new Date('2023-09-22'),
    updatedAt: new Date('2024-01-10'),
    lastLogin: new Date('2024-01-15T13:30:00')
  }
];

// ============================================================================
// RESERVATIONS DATA
// ============================================================================
const mockReservations = [
  {
    _id: '907f1f77bcf86cd799439001',
    userId: '807f1f77bcf86cd799439002',
    showtimeId: '707f1f77bcf86cd799439001',
    movieId: '507f1f77bcf86cd799439001',
    cinemaId: '607f1f77bcf86cd799439001',
    seats: ['A1', 'A2', 'A3'],
    totalPrice: 450000,
    status: 'confirmed',
    paymentMethod: 'credit_card',
    paymentStatus: 'paid',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    bookingDate: new Date('2024-01-18T15:30:00'),
    reservationDate: new Date('2024-01-20T10:00:00'),
    createdAt: new Date('2024-01-18T15:30:00'),
    updatedAt: new Date('2024-01-18T15:30:00')
  },
  {
    _id: '907f1f77bcf86cd799439002',
    userId: '807f1f77bcf86cd799439003',
    showtimeId: '707f1f77bcf86cd799439002',
    movieId: '507f1f77bcf86cd799439001',
    cinemaId: '607f1f77bcf86cd799439001',
    seats: ['B5', 'B6'],
    totalPrice: 400000,
    status: 'confirmed',
    paymentMethod: 'debit_card',
    paymentStatus: 'paid',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    bookingDate: new Date('2024-01-19T10:15:00'),
    reservationDate: new Date('2024-01-20T14:30:00'),
    createdAt: new Date('2024-01-19T10:15:00'),
    updatedAt: new Date('2024-01-19T10:15:00')
  },
  {
    _id: '907f1f77bcf86cd799439003',
    userId: '807f1f77bcf86cd799439004',
    showtimeId: '707f1f77bcf86cd799439003',
    movieId: '507f1f77bcf86cd799439002',
    cinemaId: '607f1f77bcf86cd799439002',
    seats: ['C1', 'C2', 'C3', 'C4'],
    totalPrice: 560000,
    status: 'pending',
    paymentMethod: 'wallet',
    paymentStatus: 'pending',
    qrCode: null,
    bookingDate: new Date('2024-01-20T08:00:00'),
    reservationDate: new Date('2024-01-20T19:00:00'),
    createdAt: new Date('2024-01-20T08:00:00'),
    updatedAt: new Date('2024-01-20T08:00:00')
  },
  {
    _id: '907f1f77bcf86cd799439004',
    userId: '807f1f77bcf86cd799439002',
    showtimeId: '707f1f77bcf86cd799439004',
    movieId: '507f1f77bcf86cd799439004',
    cinemaId: '607f1f77bcf86cd799439003',
    seats: ['D10', 'D11'],
    totalPrice: 500000,
    status: 'confirmed',
    paymentMethod: 'credit_card',
    paymentStatus: 'paid',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    bookingDate: new Date('2024-01-17T20:45:00'),
    reservationDate: new Date('2024-01-20T21:30:00'),
    createdAt: new Date('2024-01-17T20:45:00'),
    updatedAt: new Date('2024-01-17T20:45:00')
  },
  {
    _id: '907f1f77bcf86cd799439005',
    userId: '807f1f77bcf86cd799439005',
    showtimeId: '707f1f77bcf86cd799439005',
    movieId: '507f1f77bcf86cd799439005',
    cinemaId: '607f1f77bcf86cd799439004',
    seats: ['E3', 'E4', 'E5'],
    totalPrice: 390000,
    status: 'confirmed',
    paymentMethod: 'debit_card',
    paymentStatus: 'paid',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    bookingDate: new Date('2024-01-19T14:20:00'),
    reservationDate: new Date('2024-01-20T16:00:00'),
    createdAt: new Date('2024-01-19T14:20:00'),
    updatedAt: new Date('2024-01-19T14:20:00')
  }
];

// ============================================================================
// DASHBOARD STATISTICS
// ============================================================================
const mockDashboardStats = {
  totalUsers: 6,
  totalCinemas: 5,
  totalMovies: 6,
  totalReservations: 5,
  totalProfit: 2300000,
  monthlyRevenue: [
    { month: 'January', revenue: 450000 },
    { month: 'February', revenue: 520000 },
    { month: 'March', revenue: 480000 },
    { month: 'April', revenue: 650000 },
    { month: 'May', revenue: 200000 }
  ],
  bestMovies: [
    { title: 'The Quantum Paradox', reservations: 45, revenue: 850000 },
    { title: 'Midnight Heist', reservations: 38, revenue: 570000 },
    { title: 'Dragon\'s Legacy', reservations: 12, revenue: 300000 }
  ],
  usersByDevice: [
    { device: 'Mobile', count: 3 },
    { device: 'Desktop', count: 2 },
    { device: 'Tablet', count: 1 }
  ]
};

// ============================================================================
// EXPORT ALL MOCK DATA
// ============================================================================
module.exports = {
  mockMovies,
  mockCinemas,
  mockShowtimes,
  mockUsers,
  mockReservations,
  mockDashboardStats
};

// ============================================================================
// USAGE EXAMPLES
// ============================================================================
/*
// In your Redux actions or API calls:
const { mockMovies, mockCinemas, mockUsers } = require('./mockData');

// Example: Simulating API call
const getMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMovies);
    }, 500);
  });
};

// Example: Using in React component
import { mockCinemas } from './mockData';

function CinemaList() {
  const [cinemas, setCinemas] = useState(mockCinemas);
  // ... rest of component
}
*/
