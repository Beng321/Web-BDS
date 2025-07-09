const Property = require('../models/property');

class PropertyController {
  constructor() {
    this.properties = [
      { id: 1, title: "Căn hộ chung cư tại Hà Nội", price: 1500000000, city: "Hanoi" },
      { id: 2, title: "Nhà phố Quận 1, TP.HCM", price: 2500000000, city: "HCM" },
    ];
  }

  async getAllProperties(req, res) {
    try {
      const { province, minPrice, maxPrice, minArea, maxArea } = req.query;
      const filter = {};

      // Lọc theo tỉnh (province)
      if (province) {
        filter['location.province.name'] = { $regex: province, $options: 'i' };
      }

      // Lọc theo giá
      if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
      }

      // Lọc theo diện tích
      if (minArea || maxArea) {
        filter.area = {};
        if (minArea) filter.area.$gte = Number(minArea);
        if (maxArea) filter.area.$lte = Number(maxArea);
      }

      const properties = await Property.find(filter);
      res.json(properties);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getPropertyById(req, res) {
    try {
      const property = await Property.findById(req.params.id);
      if (!property) return res.status(404).json({ error: 'Not found' });
      res.json(property);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createProperty(req, res) {
    try {
      const property = new Property(req.body);
      await property.save();
      res.status(201).json(property);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async updateProperty(req, res) {
    try {
      const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!property) return res.status(404).json({ error: 'Not found' });
      res.json(property);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteProperty(req, res) {
    try {
      const property = await Property.findByIdAndDelete(req.params.id);
      if (!property) return res.status(404).json({ error: 'Not found' });
      res.json({ message: 'Deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new PropertyController();