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

// Define Edit Schema and Model
const editSchema = new mongoose.Schema({
  // Define your edit schema fields here
});

const Edit = mongoose.model('Edit', editSchema);

// API endpoint for fetching edit data
app.get('/api/analyticsandreporting/edit', async (req, res) => {
  try {
    const editData = await Edit.find();
    res.json(editData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint for fetching edit list data
app.get('/api/analyticsandreporting/edit/list', async (req, res) => {
  try {
    const editList = await Edit.find().select('name'); // Adjust 'name' based on your schema
    res.json(editList);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint for handling edit form submissions
app.post('/api/analyticsandreporting/edit', async (req, res) => {
  // Add logic to handle edit form submissions and save data to the database
  // You might need to create a 'EditForm' model and save data accordingly
  res.send('Edit form submitted successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});