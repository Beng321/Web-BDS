const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const { auth, isAdmin } = require('../middleware/authMiddleware');

// Route lấy danh sách user (yêu cầu xác thực và quyền admin)
router.get('/', auth, isAdmin, userController.getAllUsers);

// Route đăng ký user mới
router.post('/register', userController.register);

// Route đăng nhập
router.post('/login', userController.login);

// Route TẠM THỜI để tạo user admin mặc định (chỉ dùng cho dev/test)
if (process.env.NODE_ENV === 'development') {
  router.post('/create-admin', userController.createDefaultAdmin);
}

// Route lấy thông tin user theo id (không cần auth)
router.get('/:id', userController.getUserById);

module.exports = router; 