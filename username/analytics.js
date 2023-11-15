// models/Analytics.js
const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  metric: { type: String, required: true },
  value: { type: Number, required: true },
  username: { type: String, required: true },
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
