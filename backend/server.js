import express from 'express';
import dotenv from 'dotenv';

import connectionDB from './database/db.js';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectionDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at: http://localhost:${port}`);
    });
  });
