const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const propertyRoutes = require('./routes/propertyRoutes');
const newsRoutes = require('./routes/newsRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
console.log('NODE_ENV:', process.env.NODE_ENV);

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/properties', propertyRoutes);
app.use('/news', newsRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Real Estate API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});