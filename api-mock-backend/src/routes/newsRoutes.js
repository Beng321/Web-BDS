const express = require('express');
const newsController = require('../controllers/newsController');
const router = express.Router();

router.get('/', newsController.getNews);
router.get('/:id', newsController.getNewsById);
router.get('/related', newsController.getRelatedNews);

module.exports = router;