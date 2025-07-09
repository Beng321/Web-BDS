// Script để xem danh sách user trực tiếp từ database

require('dotenv').config({ path: '../.env' }); // Load biến môi trường từ file .env
const connectDB = require('../src/utils/db'); // Import hàm kết nối DB
const User = require('../src/models/user'); // Import model User

const seeUsers = async () => {
  try {
    // Kết nối tới database
    await connectDB();
    console.log('Connected to MongoDB');

    // Lấy danh sách tất cả user, loại trừ trường password
    const users = await User.find({}).select('-password');

    console.log('\n---');
    console.log('Danh sách User ---');
    if (users.length === 0) {
      console.log('Chưa có user nào trong database.');
    } else {
      users.forEach(user => {
        console.log('ID: ' + user._id + ', Username: ' + user.username + ', Email: ' + user.email + ', Role: ' + user.role + ', CreatedAt: ' + user.createdAt);
      });
    }
    console.log('---------------------\n');

  } catch (error) {
    console.error('Lỗi khi xem danh sách user:', error);
  } finally {
    // Đóng kết nối database sau khi hoàn thành
    // Sử dụng process.exit(0) hoặc process.exit(1) thay vì mongoose.connection.close()
    // để script kết thúc hoàn toàn sau khi kết nối DB
    // Mongoose sẽ tự động giữ kết nối mở trừ khi process thoát
    process.exit(0);
  }
};

// Chạy script
seeUsers(); 