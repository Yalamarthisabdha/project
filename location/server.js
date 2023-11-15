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

// Define Location Schema and Model
const locationSchema = new mongoose.Schema({
  // Define your location schema fields here
});

const Location = mongoose.model('Location', locationSchema);

// API endpoint for fetching location data
app.get('/api/analyticsandreporting/location', async (req, res) => {
  try {
    const locationData = await Location.find();
    res.json(locationData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint for fetching location map data
app.get('/api/analyticsandreporting/location/map', (req, res) => {
  // Add logic to fetch location map data from the database
  // You might need to create a 'LocationMap' model and fetch data accordingly
  res.json([]); // Placeholder response
});

// API endpoint for fetching location list data
app.get('/api/analyticsandreporting/location/list', async (req, res) => {
  try {
    const locationList = await Location.find().select('name'); // Adjust 'name' based on your schema
    res.json(locationList);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});