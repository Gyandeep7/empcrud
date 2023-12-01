// src/server.ts
import express from 'express';
import cors from 'cors';
import employeeRoutes from './routes/employeeRoutes';
import './database';

const app = express();
const PORT = process.env.PORT || 2500;

app.use(cors());
app.use(express.json());

app.use('/api', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
