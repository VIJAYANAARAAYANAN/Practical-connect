const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors()); // To allow requests from your frontend
app.use(express.json()); // To parse JSON bodies

// MongoDB connection
mongoose.connect('mongodb+srv://vijaybalaram05:F9hWQ6E9FwNgdNHp@cluster0.x6vwn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


// Define a simple data schema
const DataSchema = new mongoose.Schema({
  id: String,  // Ensure this matches your document structure
  name: String,
  value: String,
});
const DataModel = mongoose.model('listdata', DataSchema); // Ensure the model name matches the collection

// Endpoint to fetch data
app.get('/api/data', async (req, res) => {
    try {
        const data = await DataModel.find(); // Fetch data from MongoDB
        res.json(data); // Send the data as JSON
    } catch (err) {
        res.status(500).send('Error fetching data');
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
