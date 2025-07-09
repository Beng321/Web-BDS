const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware xác thực token và gắn user vào request
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'Không tìm thấy token xác thực' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Không tìm thấy user' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token không hợp lệ' });
  }
};

// Middleware kiểm tra quyền admin của user đã xác thực
const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Không có quyền truy cập' });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

module.exports = { auth, isAdmin }; 