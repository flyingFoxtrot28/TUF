const express = require('express');
const cors = require('cors');
const bannerRoutes = require('./routes/banner');
const app = express();

app.use(cors());
app.use(express.json());

// Database connection
const db = require('./config/db');
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

// Routes
app.use('/api/banner', bannerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
