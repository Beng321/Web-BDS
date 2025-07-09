const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: {
    province: Object,
    district: Object,
    ward: Object,
    street: String,
    coordinates: {
      latitude: Number,
      longitude: Number,
    },
  },
  image: String,
  images: [String],
  area: Number,
  bedrooms: Number,
  bathrooms: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  category: String,
  verified: Boolean,
  proAgent: Boolean,
  vip: String,
  type: { type: String, enum: ['ban', 'thue'] },
  status: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Property', propertySchema);