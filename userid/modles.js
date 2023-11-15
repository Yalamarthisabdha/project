// models/Reporting.js
const mongoose = require('mongoose');

const reportingSchema = new mongoose.Schema({
  reportType: { type: String, required: true },
  reportContent: { type: String, required: true },
});

const Reporting = mongoose.model('Reporting', reportingSchema);

module.exports = Reporting;
