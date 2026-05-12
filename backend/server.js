import express from 'express';
import dotenv from 'dotenv';

import router from './routes/taskRoutes.js';
import connectionDB from './database/db.js';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/api/v1', router);

connectionDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at: http://localhost:${port}`);
    });
  });
