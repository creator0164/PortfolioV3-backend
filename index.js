import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js'

// Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan('common'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

// Routes
app.use('/client', clientRoutes)

const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=>console.log(`Server Port: ${PORT}`))