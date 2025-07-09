const News = require('../models/news');

exports.getNews = async (req, res) => {
  try {
    let query = {};
    if (req.query.category) query.category = req.query.category;
    if (req.query.featured) query.isFeatured = req.query.featured === 'true';
    let news = await News.find(query).sort({ date: -1 });
    if (req.query.limit) news = news.slice(0, Number(req.query.limit));
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRelatedNews = async (req, res) => {
  try {
    const { category, exclude, limit } = req.query;
    let query = { category: category };
    if (exclude) {
      query._id = { $ne: exclude };
    }
    let relatedNews = await News.find(query).sort({ date: -1 });
    if (limit) {
      relatedNews = relatedNews.slice(0, Number(limit));
    }
    res.json(relatedNews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};