const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the 'cors' package

const Email = require('./models/email');

const app = express();
const port = process.env.PORT || 3001; // Update the port to 3001

app.use(cors()); // Enable CORS for all routes

mongoose.connect('mongodb+srv://grubbyrival:acmihScPU7bHWp0w@cluster0.6atovlz.mongodb.net/mailsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('MongoDB Atlas connection error:', err);
  });

app.use(express.static('public'));

app.get('/api/emails', async (req, res) => {
  try {
    const filteredEmails = await Email.find({ emailId: /proton\.com$/i });
    res.json(filteredEmails);
  } catch (error) {
    console.error('Error fetching emails:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
