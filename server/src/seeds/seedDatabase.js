const path = require('path');
const bcrypt = require('bcryptjs');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.join(__dirname, '../../.env') });
}

require('../db/mongoose');

const User = require('../models/user');
const Movie = require('../models/movie');
const Cinema = require('../models/cinema');
const Showtime = require('../models/showtime');
const Reservation = require('../models/reservation');

// ============== USERS ==============
const mockUsers = [
  {
    name: 'Admin Cinema',
    username: 'admin',
    email: 'admin@cinema.com',
    password: 'Cinema@2024',
    phone: '+84901000001',
    role: 'superadmin',
    imageurl: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Nguyen Van An',
    username: 'nguyenvanan',
    email: 'nguyenvanan@gmail.com',
    password: 'Cinema@2024',
    phone: '+84901000002',
    role: 'admin',
    imageurl: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Tran Thi Bich',
    username: 'tranthibich',
    email: 'tranthibich@gmail.com',
    password: 'Cinema@2024',
    phone: '+84901000003',
    role: 'guest',
    imageurl: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Le Van Cuong',
    username: 'levancuong',
    email: 'levancuong@gmail.com',
    password: 'Cinema@2024',
    phone: '+84901000004',
    role: 'guest',
    imageurl: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    name: 'Pham Thi Dung',
    username: 'phamthidung',
    email: 'phamthidung@gmail.com',
    password: 'Cinema@2024',
    phone: '+84901000005',
    role: 'guest',
    imageurl: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'Hoang Van Em',
    username: 'hoangvanem',
    email: 'hoangvanem@gmail.com',
    password: 'Cinema@2024',
    phone: '+84901000006',
    role: 'guest',
    imageurl: 'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    name: 'Vo Thi Phuong',
    username: 'vothiphuong',
    email: 'vothiphuong@gmail.com',
    password: 'Cinema@2024',
    phone: '+84901000007',
    role: 'guest',
    imageurl: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    name: 'Dang Van Giang',
    username: 'dangvangiang',
    email: 'dangvangiang@gmail.com',
    password: 'Cinema@2024',
    phone: '+84901000008',
    role: 'guest',
    imageurl: 'https://randomuser.me/api/portraits/men/5.jpg'
  }
];

// ============== MOVIES ==============
const mockMovies = [
  // NOW SHOWING (releaseDate < now < endDate)
  {
    title: 'Avengers: Secret Wars',
    description: 'The Avengers face their greatest threat yet as the multiverse collides. Heroes from across dimensions must unite to stop the ultimate villain from destroying all of reality.',
    genre: 'action',
    director: 'Anthony Russo, Joe Russo',
    cast: 'Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth',
    language: 'english',
    duration: 180,
    releaseDate: new Date('2025-11-15'),
    endDate: new Date('2026-02-15'),
    image: 'https://image.tmdb.org/t/p/w500/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg'
  },
  {
    title: 'Mai',
    description: 'Câu chuyện cảm động về Mai - một cô gái massage với quá khứ đau buồn, tìm kiếm tình yêu và sự cứu rỗi trong cuộc sống đầy biến động tại Sài Gòn.',
    genre: 'drama',
    director: 'Trấn Thành',
    cast: 'Phương Anh Đào, Tuấn Trần, Trấn Thành, NSND Việt Anh',
    language: 'vietnamese',
    duration: 131,
    releaseDate: new Date('2025-11-20'),
    endDate: new Date('2026-02-20'),
    image: 'https://image.tmdb.org/t/p/w500/2Gg4RXJK7iFNLPGsLSqeTSoPIoq.jpg'
  },
  {
    title: 'Dune: Part Two',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe.',
    genre: 'science fiction',
    director: 'Denis Villeneuve',
    cast: 'Timothée Chalamet, Zendaya, Rebecca Ferguson, Josh Brolin',
    language: 'english',
    duration: 166,
    releaseDate: new Date('2025-11-01'),
    endDate: new Date('2026-01-31'),
    image: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg'
  },
  {
    title: 'Godzilla x Kong: The New Empire',
    description: 'Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island mysteries.',
    genre: 'action',
    director: 'Adam Wingard',
    cast: 'Rebecca Hall, Brian Tyree Henry, Dan Stevens, Kaylee Hottle',
    language: 'english',
    duration: 115,
    releaseDate: new Date('2025-12-01'),
    endDate: new Date('2026-02-28'),
    image: 'https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg'
  },
  {
    title: 'Lật Mặt 7: Một Điều Ước',
    description: 'Phần tiếp theo của series Lật Mặt đình đám. Câu chuyện về gia đình, tình yêu và những bí mật được hé lộ qua một điều ước bất ngờ.',
    genre: 'drama',
    director: 'Lý Hải',
    cast: 'Lý Hải, Minh Hà, Huỳnh Đông, Mạc Văn Khoa',
    language: 'vietnamese',
    duration: 138,
    releaseDate: new Date('2025-12-05'),
    endDate: new Date('2026-03-05'),
    image: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg'
  },
  // COMING SOON (releaseDate > now)
  {
    title: 'Deadpool 3',
    description: 'The Merc with a Mouth returns in his most ambitious adventure yet, teaming up with Wolverine for a multiverse-spanning mission that will change the MCU forever.',
    genre: 'action',
    director: 'Shawn Levy',
    cast: 'Ryan Reynolds, Hugh Jackman, Emma Corrin, Morena Baccarin',
    language: 'english',
    duration: 127,
    releaseDate: new Date('2026-01-15'),
    endDate: new Date('2026-04-15'),
    image: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg'
  },
  {
    title: 'Kung Fu Panda 4',
    description: 'Po must train a new warrior when he is chosen to become the spiritual leader of the Valley of Peace. But before he can do that, he must face a powerful villain.',
    genre: 'animation',
    director: 'Mike Mitchell',
    cast: 'Jack Black, Awkwafina, Viola Davis, Dustin Hoffman',
    language: 'english',
    duration: 94,
    releaseDate: new Date('2026-01-20'),
    endDate: new Date('2026-04-20'),
    image: 'https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg'
  },
  {
    title: 'Ghostbusters: Frozen Empire',
    description: 'The Spengler family returns to where it all started – the iconic New York City firehouse – to team up with the original Ghostbusters against an ancient ghost threat.',
    genre: 'comedy',
    director: 'Gil Kenan',
    cast: 'Paul Rudd, Carrie Coon, Finn Wolfhard, Mckenna Grace',
    language: 'english',
    duration: 115,
    releaseDate: new Date('2026-02-01'),
    endDate: new Date('2026-05-01'),
    image: 'https://image.tmdb.org/t/p/w500/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg'
  },
  {
    title: 'Cô Dâu Hào Môn',
    description: 'Câu chuyện hài hước về một cô gái bình thường bất ngờ trở thành cô dâu của gia đình tài phiệt, đối mặt với những thử thách và âm mưu trong giới thượng lưu.',
    genre: 'comedy',
    director: 'Vũ Ngọc Đãng',
    cast: 'Ninh Dương Lan Ngọc, Lê Xuân Tiền, NSND Hồng Vân',
    language: 'vietnamese',
    duration: 120,
    releaseDate: new Date('2026-02-14'),
    endDate: new Date('2026-05-14'),
    image: 'https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg'
  },
  {
    title: 'Mission: Impossible 8',
    description: 'Ethan Hunt and his IMF team embark on their most dangerous mission yet, racing against time to prevent a global catastrophe.',
    genre: 'action',
    director: 'Christopher McQuarrie',
    cast: 'Tom Cruise, Hayley Atwell, Ving Rhames, Simon Pegg',
    language: 'english',
    duration: 163,
    releaseDate: new Date('2026-03-01'),
    endDate: new Date('2026-06-01'),
    image: 'https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg'
  },
  {
    title: 'Inside Out 3',
    description: 'Riley enters adulthood and faces new emotions as she navigates college life, relationships, and discovering who she truly wants to be.',
    genre: 'animation',
    director: 'Kelsey Mann',
    cast: 'Amy Poehler, Maya Hawke, Ayo Edebiri, Lewis Black',
    language: 'english',
    duration: 96,
    releaseDate: new Date('2026-03-15'),
    endDate: new Date('2026-06-15'),
    image: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg'
  },
  {
    title: 'Joker: Folie à Deux',
    description: 'Arthur Fleck is institutionalized at Arkham awaiting trial. While struggling with his dual identity, Arthur falls in love and finds the music that has always been inside him.',
    genre: 'thriller',
    director: 'Todd Phillips',
    cast: 'Joaquin Phoenix, Lady Gaga, Brendan Gleeson, Zazie Beetz',
    language: 'english',
    duration: 138,
    releaseDate: new Date('2026-04-01'),
    endDate: new Date('2026-07-01'),
    image: 'https://image.tmdb.org/t/p/w500/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg'
  }
];

// ============== CINEMAS ==============
const mockCinemas = [
  {
    name: 'CGV Vincom Center Bà Triệu',
    ticketPrice: 120000,
    city: 'hanoi',
    seatsAvailable: 180,
    seats: generateSeats(200),
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800'
  },
  {
    name: 'CGV Aeon Mall Long Biên',
    ticketPrice: 110000,
    city: 'hanoi',
    seatsAvailable: 160,
    seats: generateSeats(180),
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800'
  },
  {
    name: 'Lotte Cinema Landmark 81',
    ticketPrice: 150000,
    city: 'ho chi minh city',
    seatsAvailable: 200,
    seats: generateSeats(220),
    image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=800'
  },
  {
    name: 'Galaxy Cinema Nguyễn Du',
    ticketPrice: 100000,
    city: 'ho chi minh city',
    seatsAvailable: 140,
    seats: generateSeats(160),
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800'
  },
  {
    name: 'BHD Star Cineplex Vincom Đà Nẵng',
    ticketPrice: 95000,
    city: 'da nang',
    seatsAvailable: 130,
    seats: generateSeats(150),
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800'
  },
  {
    name: 'CGV Vincom Plaza Hải Phòng',
    ticketPrice: 90000,
    city: 'hai phong',
    seatsAvailable: 120,
    seats: generateSeats(140),
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800'
  },
  {
    name: 'Lotte Cinema Cần Thơ',
    ticketPrice: 85000,
    city: 'can tho',
    seatsAvailable: 110,
    seats: generateSeats(130),
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=800'
  },
  {
    name: 'CGV Vincom Nha Trang',
    ticketPrice: 95000,
    city: 'nha trang',
    seatsAvailable: 125,
    seats: generateSeats(145),
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800'
  }
];

// Helper function to generate seat layout as 2D array
// 0 = available, 1 = reserved
function generateSeats(totalSeats) {
  const seatsPerRow = 15;
  const rows = Math.ceil(totalSeats / seatsPerRow);
  const seats = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    const seatsInThisRow = Math.min(seatsPerRow, totalSeats - i * seatsPerRow);
    for (let j = 0; j < seatsInThisRow; j++) {
      // 0 = available, randomly mark some as reserved (1)
      row.push(Math.random() > 0.85 ? 1 : 0);
    }
    seats.push(row);
  }
  return seats;
}

// Seed function
async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...\n');

    // Clear existing data
    await User.deleteMany({});
    await Movie.deleteMany({});
    await Cinema.deleteMany({});
    await Showtime.deleteMany({});
    await Reservation.deleteMany({});
    console.log('✓ Cleared existing data');

    // Seed users with hashed passwords
    const hashedPassword = await bcrypt.hash('Cinema@2024', 8);
    const usersWithHashedPassword = mockUsers.map(user => ({
      ...user,
      password: hashedPassword
    }));
    const users = await User.insertMany(usersWithHashedPassword);
    console.log(`✓ Created ${users.length} users`);

    // Seed movies
    const movies = await Movie.insertMany(mockMovies);
    console.log(`✓ Created ${movies.length} movies`);

    // Seed cinemas
    const cinemas = await Cinema.insertMany(mockCinemas);
    console.log(`✓ Created ${cinemas.length} cinemas`);

    // Seed showtimes - multiple times per day for each movie/cinema
    const showtimes = [];
    const showTimes = ['09:00', '11:30', '14:00', '16:30', '19:00', '21:30'];
    
    // Only create showtimes for now showing movies
    const now = new Date();
    const nowShowingMovies = movies.filter(m => 
      new Date(m.releaseDate) <= now && new Date(m.endDate) >= now
    );
    
    console.log(`   Found ${nowShowingMovies.length} now showing movies for showtimes`);

    for (const movie of nowShowingMovies) {
      for (const cinema of cinemas) {
        // Create showtimes for next 7 days
        for (let day = 0; day < 7; day++) {
          const randomTimes = showTimes.sort(() => 0.5 - Math.random()).slice(0, 4);
          for (const time of randomTimes) {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() + day);
            startDate.setHours(parseInt(time.split(':')[0]), parseInt(time.split(':')[1]), 0, 0);
            
            const endDate = new Date(startDate.getTime() + movie.duration * 60000);
            
            showtimes.push({
              startAt: time,
              startDate,
              endDate,
              movieId: movie._id,
              cinemaId: cinema._id
            });
          }
        }
      }
    }
    
    const createdShowtimes = await Showtime.insertMany(showtimes);
    console.log(`✓ Created ${createdShowtimes.length} showtimes`);

    // Seed reservations
    const reservations = [];
    const guestUsers = users.filter(u => u.role === 'guest');
    
    // Only create reservations if there are showtimes
    if (createdShowtimes.length === 0) {
      console.log('⚠️  No showtimes available, skipping reservations');
    }
    
    for (let i = 0; i < 30 && createdShowtimes.length > 0; i++) {
      const randomUser = guestUsers[Math.floor(Math.random() * guestUsers.length)];
      const randomShowtime = createdShowtimes[Math.floor(Math.random() * createdShowtimes.length)];
      if (!randomShowtime) continue;
      
      const randomCinema = cinemas.find(c => c._id.toString() === randomShowtime.cinemaId.toString());
      const randomMovie = movies.find(m => m._id.toString() === randomShowtime.movieId.toString());
      
      if (!randomCinema || !randomMovie) continue;

      const numSeats = Math.floor(Math.random() * 4) + 1;
      const selectedSeats = [];
      const usedSeats = new Set();
      
      for (let k = 0; k < numSeats; k++) {
        let seat;
        do {
          const row = String.fromCharCode(65 + Math.floor(Math.random() * 8));
          const num = Math.floor(Math.random() * 15) + 1;
          seat = `${row}${num}`;
        } while (usedSeats.has(seat));
        usedSeats.add(seat);
        selectedSeats.push(seat);
      }

      reservations.push({
        date: randomShowtime.startDate,
        startAt: randomShowtime.startAt,
        seats: selectedSeats,
        ticketPrice: randomCinema.ticketPrice,
        total: randomCinema.ticketPrice * numSeats,
        movieId: randomMovie._id,
        cinemaId: randomCinema._id,
        username: randomUser.username,
        phone: randomUser.phone,
        checkin: Math.random() > 0.7
      });
    }
    
    const createdReservations = await Reservation.insertMany(reservations);
    console.log(`✓ Created ${createdReservations.length} reservations`);

    console.log('\n✅ Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   👤 Users: ${users.length}`);
    console.log(`   🎬 Movies: ${movies.length} (${nowShowingMovies.length} now showing, ${movies.length - nowShowingMovies.length} coming soon)`);
    console.log(`   🏢 Cinemas: ${cinemas.length}`);
    console.log(`   🎟️  Showtimes: ${createdShowtimes.length}`);
    console.log(`   📝 Reservations: ${createdReservations.length}`);
    
    console.log('\n🔐 Login Credentials:');
    console.log('   Super Admin: admin@cinema.com / Cinema@2024');
    console.log('   Admin: nguyenvanan@gmail.com / Cinema@2024');
    console.log('   Guest: tranthibich@gmail.com / Cinema@2024');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
