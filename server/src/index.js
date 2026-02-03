const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const pool = require('./config/db'); // Database connection

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('VCare ERP API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
