# Docker Deployment Guide

## Yêu cầu
- Docker Desktop đã cài đặt
- Docker Compose

## Chạy ứng dụng

### 1. Build và khởi động tất cả services
```bash
docker-compose up --build
```

### 2. Chạy ở chế độ background
```bash
docker-compose up -d --build
```

### 3. Seed dữ liệu (sau khi services đã chạy)
```bash
docker-compose exec server npm run seed
```

## Truy cập ứng dụng
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080
- MongoDB: localhost:27017

## Thông tin đăng nhập
- Super Admin: admin@cinema.com / Cinema@2024
- Admin: nguyenvanan@gmail.com / Cinema@2024
- Guest: tranthibich@gmail.com / Cinema@2024

## Các lệnh hữu ích

### Xem logs
```bash
docker-compose logs -f
```

### Dừng services
```bash
docker-compose down
```

### Dừng và xóa volumes (xóa database)
```bash
docker-compose down -v
```

### Rebuild một service cụ thể
```bash
docker-compose up -d --build server
docker-compose up -d --build client
```
