import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import asyncHandler from 'express-async-handler';
import Product from '../backend/models/productModels.js';

dotenv.config();
connectDB();
const app = express();

// @ROUTES
import productRoutes from './routes/productRoutes.js';

app.get(
	'/',
	asyncHandler(async (req, res) => {
		res.send('API is running...');
	})
);

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
