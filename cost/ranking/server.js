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

// Define Ranking Schema and Model
const rankingSchema = new mongoose.Schema({
  // Define your ranking schema fields here
});

const Ranking = mongoose.model('Ranking', rankingSchema);

// API endpoint for fetching ranking data
app.get('/api/analyticsandreporting/ranking', async (req, res) => {
  try {
    const rankingData = await Ranking.find();
    res.json(rankingData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint for fetching ranking list data
app.get('/api/analyticsandreporting/ranking/list', async (req, res) => {
  try {
    const rankingList = await Ranking.find().select('name rank'); // Adjust 'name' and 'rank' based on your schema
    res.json(rankingList);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint for fetching top ranking data
app.get('/api/analyticsandreporting/ranking/top', async (req, res) => {
  try {
    const topRanking = await Ranking.find().sort({ rank: 1 }).limit(5); // Adjust 'rank' based on your schema
    res.json(topRanking);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});