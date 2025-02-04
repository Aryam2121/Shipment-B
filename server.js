import { json } from 'body-parser';
import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import shipmentRoutes from "./routes/shipmentRoutes.js";

config();
connectDB();

const app = express();
app.use(cors());
app.use(json());

app.use('/api', shipmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
