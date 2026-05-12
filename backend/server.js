import express from 'express';
import dotenv from 'dotenv';

import connectionDB from './database/db.js';
import Task from './models/taskModel.js';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.post('/api/v1', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

connectionDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at: http://localhost:${port}`);
    });
  });
