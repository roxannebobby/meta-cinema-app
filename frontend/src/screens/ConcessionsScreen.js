import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const ConcessionScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async (req, res) => {
			const { data } = await axios.get('/api/products');
			setProducts(data);
		};
		getProducts();
	}, []);

	return (
		<>
			<h1>Concessions</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default ConcessionScreen;
