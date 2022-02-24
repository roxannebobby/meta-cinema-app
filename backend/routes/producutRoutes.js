import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = products.find((p) => p._id === req.params.id);

		res.json(product);
	})
);

export default router;
