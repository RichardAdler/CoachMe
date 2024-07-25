require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Test');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
