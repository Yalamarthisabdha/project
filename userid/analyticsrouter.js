// routes/analyticsRoutes.js
const express = require('express');
const router = express.Router();
const Analytics = require('../models/Analytics');

// Get all analytics data
router.get('/', async (req, res) => {
  try {
    const analyticsData = await Analytics.find();
    res.json(analyticsData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
