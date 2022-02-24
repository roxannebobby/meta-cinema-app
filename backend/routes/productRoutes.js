import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler';
import Product from '../models/productModels.js';

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
	})
);

router.get('/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

export default router;
