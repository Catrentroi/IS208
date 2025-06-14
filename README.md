# Hệ thống Quản lý Ứng tuyển Việc làm (Job Application System)

Một ứng dụng web full-stack để quản lý quá trình ứng tuyển việc làm, được xây dựng với React (Frontend) và Node.js/Express (Backend).

## 📋 Mục lục

-   [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
-   [Cài đặt Backend](#cài-đặt-backend)
-   [Cài đặt Frontend](#cài-đặt-frontend)
-   [Cấu hình Database](#cấu-hình-database)
-   [Chạy ứng dụng](#chạy-ứng-dụng)
-   [API Endpoints](#api-endpoints)
-   [Cấu trúc dự án](#cấu-trúc-dự-án)
-   [Troubleshooting](#troubleshooting)

## 🔧 Yêu cầu hệ thống

Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt các phần mềm sau:

-   **Node.js** (phiên bản 16.0 trở lên) - [Tải về](https://nodejs.org/)
-   **npm** hoặc **yarn** (đi kèm với Node.js)
-   **MongoDB** (local hoặc MongoDB Atlas) - [Tải về](https://www.mongodb.com/try/download/community)
-   **Git** - [Tải về](https://git-scm.com/)

## 🗄️ Cài đặt Backend

### Bước 1: Di chuyển vào thư mục backend

```bash
cd backend
```

### Bước 2: Cài đặt dependencies

```bash
npm install
```

### Bước 3: Cấu hình biến môi trường

Tạo file `.env` trong thư mục `backend` với nội dung sau:

```env
# Server Configuration
PORT=5000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/job_application_system
# Hoặc sử dụng MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/job_application_system

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d

# Environment
NODE_ENV=development
```

### Bước 4: Khởi động server backend

#### Development mode (với nodemon):

```bash
npm run dev
```

#### Production mode:

```bash
npm start
```

Server sẽ chạy tại: `http://localhost:5000`

## 🎨 Cài đặt Frontend

### Bước 1: Mở terminal mới và di chuyển vào thư mục frontend

```bash
cd Frontend
```

### Bước 2: Cài đặt dependencies

```bash
npm install
```

### Bước 3: Cấu hình biến môi trường (nếu cần)

Tạo file `.env` trong thư mục `Frontend` nếu cần:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Bước 4: Khởi động development server

```bash
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:5173`

## 🗂️ Cấu hình Database

### Tùy chọn 1: MongoDB Local

1. **Cài đặt MongoDB Community Server**

    - Tải về từ [MongoDB Download Center](https://www.mongodb.com/try/download/community)
    - Cài đặt theo hướng dẫn của hệ điều hành

2. **Khởi động MongoDB service**

    ```bash
    # Windows (với MongoDB service)
    net start MongoDB

    # macOS (với Homebrew)
    brew services start mongodb-community

    # Linux (với systemd)
    sudo systemctl start mongod
    ```

3. **Sử dụng connection string local:**
    ```env
    MONGODB_URI=mongodb://localhost:27017/job_application_system
    ```

### Tùy chọn 2: MongoDB Atlas (Cloud)

1. **Tạo tài khoản tại [MongoDB Atlas](https://www.mongodb.com/atlas)**

2. **Tạo cluster và database**

3. **Lấy connection string và cập nhật file .env:**
    ```env
    MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/job_application_system
    ```

## 🚀 Chạy ứng dụng

### Chạy đầy đủ hệ thống

1. **Terminal 1 - Backend:**

    ```bash
    cd backend
    npm run dev
    ```

2. **Terminal 2 - Frontend:**

    ```bash
    cd Frontend
    npm run dev
    ```

3. **Truy cập ứng dụng:**
    - Frontend: `http://localhost:5173`
    - Backend API: `http://localhost:5000`
    - Test API: `http://localhost:5000/api/test`

## 📡 API Endpoints

### Authentication

-   `POST /api/auth/register` - Đăng ký tài khoản
-   `POST /api/auth/login` - Đăng nhập
-   `GET /api/auth/profile` - Lấy thông tin profile

### Users

-   `GET /api/users` - Lấy danh sách users
-   `GET /api/users/:id` - Lấy thông tin user
-   `PUT /api/users/:id` - Cập nhật user
-   `DELETE /api/users/:id` - Xóa user

### Jobs

-   `GET /api/jobs` - Lấy danh sách việc làm
-   `POST /api/jobs` - Tạo việc làm mới
-   `GET /api/jobs/:id` - Lấy chi tiết việc làm
-   `PUT /api/jobs/:id` - Cập nhật việc làm
-   `DELETE /api/jobs/:id` - Xóa việc làm

### Applications

-   `GET /api/applications` - Lấy danh sách đơn ứng tuyển
-   `POST /api/applications` - Tạo đơn ứng tuyển
-   `GET /api/applications/:id` - Lấy chi tiết đơn ứng tuyển
-   `PUT /api/applications/:id` - Cập nhật đơn ứng tuyển

### Interviews

-   `GET /api/interviews` - Lấy danh sách phỏng vấn
-   `POST /api/interviews` - Tạo lịch phỏng vấn
-   `PUT /api/interviews/:id` - Cập nhật lịch phỏng vấn

## 📁 Cấu trúc dự án

```
IS208/
├── Frontend/                  # React Frontend
│   ├── src/                  # Source code
│   │   ├── components/       # React components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom hooks
│   │   └── utils/           # Utility functions
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── backend/                 # Node.js Backend
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Express middlewares
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
└── README.md              # This file
```

## 🛠️ Scripts NPM

### Backend Scripts

```bash
npm start          # Chạy production server
npm run dev        # Chạy development server với nodemon
```

### Frontend Scripts

```bash
npm run dev        # Chạy development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 🔍 Troubleshooting

### Lỗi thường gặp và cách khắc phục

#### 1. Port đã được sử dụng

```bash
Error: listen EADDRINUSE: address already in use :::5000
```

**Giải pháp:**

-   Thay đổi PORT trong file `.env`
-   Hoặc dừng process đang sử dụng port đó

#### 2. Không kết nối được MongoDB

```bash
MongoNetworkError: failed to connect to server
```

**Giải pháp:**

-   Kiểm tra MongoDB service đang chạy
-   Kiểm tra connection string trong `.env`
-   Kiểm tra firewall và network

#### 3. CORS Error

```bash
Access to fetch at 'http://localhost:5000' from origin 'http://localhost:5173' has been blocked by CORS policy
```

**Giải pháp:**

-   Đảm bảo backend đã cấu hình CORS
-   Kiểm tra URL API trong frontend

#### 4. Module not found

```bash
Cannot find module 'xyz'
```

**Giải pháp:**

```bash
# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install
```

### Kiểm tra hệ thống

1. **Kiểm tra Node.js:**

    ```bash
    node --version
    npm --version
    ```

2. **Kiểm tra MongoDB:**

    ```bash
    mongosh --version
    ```

3. **Test API Backend:**
    ```bash
    curl http://localhost:5000/api/test
    ```

## 📞 Hỗ trợ

Nếu gặp vấn đề trong quá trình cài đặt, vui lòng:

1. Kiểm tra logs trong terminal
2. Xem phần [Troubleshooting](#troubleshooting)
3. Tạo issue trên repository

## 📝 Ghi chú

-   Đảm bảo cả Frontend và Backend đều đang chạy để hệ thống hoạt động đầy đủ
-   Sử dụng HTTPS trong production
-   Thay đổi JWT_SECRET trong production
-   Backup database định kỳ

---

**Chúc bạn cài đặt thành công! 🎉**
