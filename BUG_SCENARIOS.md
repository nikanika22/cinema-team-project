# 🐛 KỊch Bản Lỗi (Bug Scenarios) - Cinema+ Project
## Dành cho Quản Lý Bug trên Redmine

---

## 📋 BUG #1: Lỗi Đăng Nhập - Không Xác Thực Password Đúng

### 🔴 Mô Tả Lỗi
Người dùng có thể đăng nhập với password sai hoặc không được xác thực đúng.

### 📝 Kịch Bản Tái Hiện
1. Mở ứng dụng Cinema+
2. Vào trang đăng nhập
3. Nhập username: `nguyenvana`
4. Nhập password: `wrongpassword`
5. Nhấn nút "Login"
6. **Kết quả mong đợi**: Hiển thị lỗi "Invalid credentials"
7. **Kết quả thực tế**: Có thể đăng nhập thành công (BUG)

### 🔧 Cách Fix
**File**: `server/src/models/user.js`
```javascript
// Thêm validation cho password
userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error('Unable to login');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Unable to login');

  return user;
};
```

**File**: `server/src/routes/users.js`
```javascript
// Đảm bảo route login sử dụng findByCredentials
router.post('/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.username, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send({ error: 'Unable to login' });
  }
});
```

### ✅ Độ Ưu Tiên: **HIGH**
### 👤 Người Gán: [Dev Lead]
### 📅 Deadline: [Ngày hôm sau]

---

## 📋 BUG #2: Lỗi Hiển Thị Danh Sách Phim - Không Load Dữ Liệu

### 🔴 Mô Tả Lỗi
Trang danh sách phim không hiển thị dữ liệu, chỉ hiển thị loading spinner vô tận.

### 📝 Kịch Bản Tái Hiện
1. Đăng nhập với tài khoản admin
2. Vào trang "Movies" hoặc "Danh Sách Phim"
3. **Kết quả mong đợi**: Hiển thị danh sách 6 phim
4. **Kết quả thực tế**: Chỉ hiển thị loading spinner, không có dữ liệu

### 🔧 Cách Fix
**File**: `client/src/pages/Admin/MovieList/MovieList.js`
```javascript
componentDidMount() {
  const { movies, getMovies } = this.props;
  // Fix: Kiểm tra nếu movies là array và có length
  if (!movies || movies.length === 0) {
    getMovies();
  }
}

renderMovies() {
  const { classes, movies } = this.props;
  const filteredMovies = match(this.state.search, movies, 'title');

  // Fix: Kiểm tra nếu movies tồn tại trước khi render
  if (!movies || movies.length === 0) {
    return (
      <div className={classes.progressWrapper}>
        <CircularProgress />
      </div>
    );
  }
  
  return (
    <Grid container spacing={3}>
      {filteredMovies.map(movie => (
        <Grid key={movie._id} item lg={4} md={6} xs={12}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}
```

**File**: `server/src/routes/movies.js`
```javascript
// Đảm bảo API endpoint trả về dữ liệu đúng
router.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.send(movies);
  } catch (e) {
    res.status(500).send({ error: 'Unable to fetch movies' });
  }
});
```

### ✅ Độ Ưu Tiên: **CRITICAL**
### 👤 Người Gán: [Frontend Dev]
### 📅 Deadline: [Ngay hôm nay]

---

## 📋 BUG #3: Lỗi Tạo Đặt Chỗ - Không Lưu Vào Database

### 🔴 Mô Tả Lỗi
Khi người dùng tạo đặt chỗ (reservation), dữ liệu không được lưu vào database.

### 📝 Kịch Bản Tái Hiện
1. Đăng nhập với tài khoản guest
2. Chọn một phim
3. Chọn một suất chiếu
4. Chọn ghế
5. Nhấn "Book Now"
6. **Kết quả mong đợi**: Hiển thị "Booking successful"
7. **Kết quả thực tế**: Không có thông báo, dữ liệu không lưu

### 🔧 Cách Fix
**File**: `server/src/routes/reservation.js`
```javascript
router.post('/api/reservations', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    
    // Fix: Đảm bảo validate dữ liệu trước khi lưu
    if (!reservation.seats || reservation.seats.length === 0) {
      return res.status(400).send({ error: 'Please select seats' });
    }
    
    await reservation.save();
    res.status(201).send(reservation);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
```

**File**: `client/src/pages/Booking/Booking.js`
```javascript
handleBooking = async () => {
  try {
    const response = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        movieId: this.state.movieId,
        cinemaId: this.state.cinemaId,
        seats: this.state.selectedSeats,
        totalPrice: this.state.totalPrice,
        username: this.props.user.username,
        phone: this.props.user.phone
      })
    });
    
    if (response.ok) {
      alert('Booking successful!');
      this.props.history.push('/my-bookings');
    } else {
      alert('Booking failed!');
    }
  } catch (e) {
    console.error('Booking error:', e);
  }
};
```

### ✅ Độ Ưu Tiên: **CRITICAL**
### 👤 Người Gán: [Backend Dev]
### 📅 Deadline: [Ngay hôm nay]

---

## 📋 BUG #4: Lỗi Xóa Phim - Không Xóa Khỏi Database

### 🔴 Mô Tả Lỗi
Admin xóa phim nhưng dữ liệu vẫn còn trong database.

### 📝 Kịch Bản Tái Hiện
1. Đăng nhập với tài khoản admin
2. Vào trang "Movies"
3. Chọn một phim
4. Nhấn nút "Delete"
5. Xác nhận xóa
6. **Kết quả mong đợi**: Phim bị xóa khỏi danh sách
7. **Kết quả thực tế**: Phim vẫn hiển thị trong danh sách

### 🔧 Cách Fix
**File**: `server/src/routes/movies.js`
```javascript
router.delete('/api/movies/:id', async (req, res) => {
  try {
    // Fix: Sử dụng findByIdAndDelete thay vì findByIdAndUpdate
    const movie = await Movie.findByIdAndDelete(req.params.id);
    
    if (!movie) {
      return res.status(404).send({ error: 'Movie not found' });
    }
    
    res.send({ message: 'Movie deleted successfully' });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});
```

### ✅ Độ Ưu Tiên: **HIGH**
### 👤 Người Gán: [Backend Dev]
### 📅 Deadline: [2 ngày]

---

## 📋 BUG #5: Lỗi Cập Nhật Thông Tin Người Dùng - Không Lưu Thay Đổi

### 🔴 Mô Tả Lỗi
Khi người dùng cập nhật thông tin cá nhân, thay đổi không được lưu.

### 📝 Kịch Bản Tái Hiện
1. Đăng nhập
2. Vào "My Account"
3. Thay đổi số điện thoại
4. Nhấn "Save"
5. **Kết quả mong đợi**: Hiển thị "Updated successfully"
6. **Kết quả thực tế**: Không có thông báo, thay đổi không lưu

### 🔧 Cách Fix
**File**: `server/src/routes/users.js`
```javascript
router.patch('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    
    res.send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
```

### ✅ Độ Ưu Tiên: **MEDIUM**
### 👤 Người Gán: [Backend Dev]
### 📅 Deadline: [3 ngày]

---

## 📋 BUG #6: Lỗi Hiển Thị Giá Vé - Tính Toán Sai

### 🔴 Mô Tả Lỗi
Giá vé hiển thị không chính xác, tổng tiền tính sai.

### 📝 Kịch Bản Tái Hiện
1. Chọn 3 ghế với giá 150,000 VND/ghế
2. **Kết quả mong đợi**: Tổng = 450,000 VND
3. **Kết quả thực tế**: Hiển thị 150,000 VND (chỉ 1 ghế)

### 🔧 Cách Fix
**File**: `client/src/pages/Booking/SeatSelection.js`
```javascript
calculateTotal = () => {
  const { selectedSeats, ticketPrice } = this.state;
  
  // Fix: Nhân số ghế với giá vé
  const total = selectedSeats.length * ticketPrice;
  
  this.setState({ totalPrice: total });
  return total;
};

handleSeatClick = (seatId) => {
  const { selectedSeats } = this.state;
  
  if (selectedSeats.includes(seatId)) {
    this.setState({
      selectedSeats: selectedSeats.filter(s => s !== seatId)
    });
  } else {
    this.setState({
      selectedSeats: [...selectedSeats, seatId]
    });
  }
  
  // Fix: Tính toán lại tổng tiền
  this.calculateTotal();
};
```

### ✅ Độ Ưu Tiên: **HIGH**
### 👤 Người Gán: [Frontend Dev]
### 📅 Deadline: [2 ngày]

---

## 📋 BUG #7: Lỗi Tìm Kiếm - Không Lọc Dữ Liệu Đúng

### 🔴 Mô Tả Lỗi
Tính năng tìm kiếm phim không hoạt động, không lọc được kết quả.

### 📝 Kịch Bản Tái Hiện
1. Vào trang "Movies"
2. Nhập "Avatar" vào ô tìm kiếm
3. **Kết quả mong đợi**: Hiển thị phim "Avatar"
4. **Kết quả thực tế**: Hiển thị tất cả phim, không lọc

### 🔧 Cách Fix
**File**: `client/src/pages/Admin/MovieList/MovieList.js`
```javascript
renderMovies() {
  const { classes, movies } = this.props;
  
  // Fix: Sử dụng match function để lọc dữ liệu
  const filteredMovies = match(
    this.state.search,
    movies,
    'title'
  );

  if (!filteredMovies || filteredMovies.length === 0) {
    return (
      <div className={classes.noResults}>
        No movies found
      </div>
    );
  }

  return (
    <Grid container spacing={3}>
      {filteredMovies.map(movie => (
        <Grid key={movie._id} item lg={4} md={6} xs={12}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}
```

### ✅ Độ Ưu Tiên: **MEDIUM**
### 👤 Người Gán: [Frontend Dev]
### 📅 Deadline: [3 ngày]

---

## 📋 BUG #8: Lỗi Hiển Thị Rạp Chiếu - Không Load Dữ Liệu

### 🔴 Mô Tả Lỗi
Trang danh sách rạp chiếu không hiển thị dữ liệu.

### 📝 Kịch Bản Tái Hiện
1. Đăng nhập admin
2. Vào "Cinemas"
3. **Kết quả mong đợi**: Hiển thị 5 rạp chiếu
4. **Kết quả thực tế**: Chỉ hiển thị loading spinner

### 🔧 Cách Fix
**File**: `client/src/pages/Admin/CinemaList/CinemaList.js`
```javascript
componentDidMount() {
  const { cinemas, getCinemas } = this.props;
  
  // Fix: Kiểm tra nếu cinemas rỗng
  if (!cinemas || cinemas.length === 0) {
    getCinemas();
  }
}

render() {
  const { classes, cinemas } = this.props;
  const { search } = this.state;
  
  // Fix: Lọc dữ liệu đúng
  const filteredCinemas = match(search, cinemas, 'name');
  
  return (
    <div className={classes.root}>
      <CinemaToolbar
        search={search}
        onChangeSearch={e => this.setState({ search: e.target.value })}
      />
      <div className={classes.content}>
        {!filteredCinemas || filteredCinemas.length === 0 ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            {filteredCinemas.map(cinema => (
              <Grid key={cinema._id} item lg={4} md={6} xs={12}>
                <CinemaCard cinema={cinema} />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
```

### ✅ Độ Ưu Tiên: **CRITICAL**
### 👤 Người Gán: [Frontend Dev]
### 📅 Deadline: [Ngay hôm nay]

---

## 📋 BUG #9: Lỗi Xác Thực Token - Không Kiểm Tra JWT

### 🔴 Mô Tả Lỗi
Người dùng có thể truy cập các endpoint được bảo vệ mà không có token hợp lệ.

### 📝 Kịch Bản Tái Hiện
1. Đăng xuất
2. Mở DevTools
3. Gửi request đến `/api/users` mà không có token
4. **Kết quả mong đợi**: Lỗi 401 Unauthorized
5. **Kết quả thực tế**: Trả về dữ liệu người dùng (BUG)

### 🔧 Cách Fix
**File**: `server/src/middlewares/auth.js`
```javascript
const auth = async (req, res, next) => {
  try {
    // Fix: Kiểm tra token từ header
    const token = req.header('Authorization').replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).send({ error: 'No token provided' });
    }
    
    const decoded = jwt.verify(token, 'mySecret');
    const user = await User.findById(decoded._id);
    
    if (!user) {
      return res.status(401).send({ error: 'User not found' });
    }
    
    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

module.exports = auth;
```

**File**: `server/src/routes/users.js`
```javascript
const auth = require('../middlewares/auth');

// Fix: Thêm middleware auth vào các route cần bảo vệ
router.get('/api/users', auth, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});
```

### ✅ Độ Ưu Tiên: **CRITICAL**
### 👤 Người Gán: [Backend Dev]
### 📅 Deadline: [Ngay hôm nay]

---

## 📋 BUG #10: Lỗi Hiển Thị Thông Báo Lỗi - Không Hiển Thị Error Message

### 🔴 Mô Tả Lỗi
Khi có lỗi, ứng dụng không hiển thị thông báo lỗi cho người dùng.

### 📝 Kịch Bản Tái Hiện
1. Cố gắng đăng nhập với username không tồn tại
2. **Kết quả mong đợi**: Hiển thị "User not found"
3. **Kết quả thực tế**: Không có thông báo, chỉ im lặng

### 🔧 Cách Fix
**File**: `client/src/pages/Login/Login.js`
```javascript
handleLogin = async () => {
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    });
    
    const data = await response.json();
    
    // Fix: Kiểm tra response status
    if (!response.ok) {
      // Hiển thị error message
      this.setState({ error: data.error || 'Login failed' });
      return;
    }
    
    // Lưu token và redirect
    localStorage.setItem('token', data.token);
    this.props.history.push('/dashboard');
  } catch (e) {
    // Fix: Hiển thị error message
    this.setState({ error: e.message });
  }
};

render() {
  return (
    <div>
      {this.state.error && (
        <Alert severity="error">{this.state.error}</Alert>
      )}
      {/* Form fields */}
    </div>
  );
}
```

### ✅ Độ Ưu Tiên: **MEDIUM**
### 👤 Người Gán: [Frontend Dev]
### 📅 Deadline: [3 ngày]

---

## 📊 Tóm Tắt Bug Report

| Bug # | Tiêu Đề | Độ Ưu Tiên | Trạng Thái |
|-------|---------|-----------|-----------|
| 1 | Lỗi Đăng Nhập | HIGH | Open |
| 2 | Lỗi Hiển Thị Danh Sách Phim | CRITICAL | Open |
| 3 | Lỗi Tạo Đặt Chỗ | CRITICAL | Open |
| 4 | Lỗi Xóa Phim | HIGH | Open |
| 5 | Lỗi Cập Nhật Thông Tin | MEDIUM | Open |
| 6 | Lỗi Tính Toán Giá Vé | HIGH | Open |
| 7 | Lỗi Tìm Kiếm | MEDIUM | Open |
| 8 | Lỗi Hiển Thị Rạp Chiếu | CRITICAL | Open |
| 9 | Lỗi Xác Thực Token | CRITICAL | Open |
| 10 | Lỗi Hiển Thị Thông Báo | MEDIUM | Open |

---

## 🔗 Hướng Dẫn Sử Dụng Trên Redmine

1. **Tạo Project**: Cinema+
2. **Tạo Issue** cho mỗi bug với:
   - **Subject**: Tiêu đề bug
   - **Description**: Kịch bản tái hiện
   - **Priority**: Độ ưu tiên
   - **Assigned to**: Người gán
   - **Due date**: Deadline
   - **Custom field**: Cách fix (nếu có)

3. **Tracking**: Cập nhật trạng thái khi fix xong

---

**Tài liệu này được cập nhật lần cuối: 06/12/2025**
