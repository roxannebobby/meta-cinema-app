import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';

// @desc    Get all products
// @route   GET to /api/products
// @access  Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);

// @desc    Get single product
// @route   GET to /api/products/:id
// @access  Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.json(product);
		} else {
			res.status(404).json({
				message: 'Product not found.',
			});
		}
	})
);

export default router;
