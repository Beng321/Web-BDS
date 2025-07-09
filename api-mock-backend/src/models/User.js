const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Định nghĩa schema cho User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware: Tự động hash password trước khi lưu user
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // Nếu password không đổi thì bỏ qua
  this.password = await bcrypt.hash(this.password, 10); // Hash password với salt rounds = 10
  next();
});

// Phương thức so sánh password khi đăng nhập
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password); // So sánh password nhập vào với hash đã lưu
};

// Kiểm tra xem model đã tồn tại chưa trước khi tạo mới
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
