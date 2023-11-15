const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Enable CORS
app.use(cors());
app.use(express.json());

// Define Analytics and Reporting Schema and Model (Assuming you have a schema)
const analyticsSchema = new mongoose.Schema({
  // Define your schema fields here
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

// API endpoint for fetching analytics data
app.get('/api/analytics', async (req, res) => {
  try {
    const analyticsData = await Analytics.find();
    res.json(analyticsData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint for fetching status data
app.get('/api/analyticsandreporting/status', (req, res) => {
  // Add logic to fetch status data from the database
  // You might need to create a 'Status' model and fetch data accordingly
  res.json([]); // Placeholder response
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});