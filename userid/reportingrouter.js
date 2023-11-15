// routes/reportingRoutes.js
const express = require('express');
const router = express.Router();
const Reporting = require('../models/Reporting');

// Get all reporting data
router.get('/', async (req, res) => {
  try {
    const reportingData = await Reporting.find();
    res.json(reportingData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
