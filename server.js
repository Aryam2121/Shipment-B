import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import shipmentRoutes from "./routes/shipmentRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); 

app.use('/api', shipmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
