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

// Define Cost Schema and Model
const costSchema = new mongoose.Schema({
  // Define your cost schema fields here
});

const Cost = mongoose.model('Cost', costSchema);

// API endpoint for fetching cost data
app.get('/api/analyticsandreporting/cost', async (req, res) => {
  try {
    const costData = await Cost.find();
    res.json(costData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint for fetching cost report data
app.get('/api/analyticsandreporting/cost/report', (req, res) => {
  // Add logic to fetch cost report data from the database
  // You might need to create a 'CostReport' model and fetch data accordingly
  res.json([]); // Placeholder response
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})