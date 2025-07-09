const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Import bcrypt

// Đăng ký tài khoản mới
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Kiểm tra dữ liệu đầu vào
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin.' });
    }
    // Kiểm tra user/email đã tồn tại chưa
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Email hoặc username đã tồn tại.' });
    }
    // Tạo user mới và lưu vào DB (password sẽ tự động hash nhờ middleware)
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'Đăng ký thành công!' });
  } catch (err) {
    // Xử lý lỗi server
    res.status(500).json({ error: err.message });
  }
};

// Đăng nhập, trả về token nếu thành công
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Kiểm tra dữ liệu đầu vào
    if (!email || !password) {
      return res.status(400).json({ error: 'Vui lòng nhập email và mật khẩu.' });
    }
    // Tìm user theo email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Email hoặc mật khẩu không đúng.' });
    }
    // So sánh password nhập vào với password đã hash
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Email hoặc mật khẩu không đúng.' });
    }
    // Tạo JWT token, trả về cho client
    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    // Xử lý lỗi server
    res.status(500).json({ error: err.message });
  }
};

// Lấy danh sách tất cả user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Không trả về password
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// TẠM THỜI: Tạo user admin mặc định nếu chưa có (chỉ dùng cho dev/test)
exports.createDefaultAdmin = async (req, res) => {
  // Chỉ cho phép tạo trong môi trường dev/test
  if (process.env.NODE_ENV !== 'development') {
    return res.status(403).json({ message: 'Endpoint này chỉ hoạt động trong môi trường phát triển.' });
  }

  try {
    // Kiểm tra xem đã có user admin nào chưa
    const adminExists = await User.findOne({ role: 'admin' });
    
    if (adminExists) {
      return res.status(409).json({ message: 'Tài khoản admin mặc định đã tồn tại.' });
    }

    // Định nghĩa thông tin admin mặc định
    const defaultAdmin = {
      username: 'admin',
      email: 'admin@slandx.com',
      password: 'admin123', // Mật khẩu mặc định, sẽ được hash khi lưu
      role: 'admin',
    };

    // Tạo user admin mới
    const newAdmin = new User(defaultAdmin);
    await newAdmin.save(); // Mật khẩu được hash tự động nhờ pre-save hook

    res.status(201).json({ message: 'Tài khoản admin mặc định đã được tạo.', user: { username: newAdmin.username, email: newAdmin.email } });

  } catch (err) {
    console.error('Lỗi khi tạo tài khoản admin mặc định:', err);
    res.status(500).json({ error: 'Lỗi server khi tạo tài khoản admin mặc định.' });
  }
};

// Lấy thông tin user theo id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, '-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 