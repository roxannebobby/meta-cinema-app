import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const ConcessionScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios.get('/api/concessions');
			setProducts(data);
		};
		getProducts();
	}, []);

	return (
		<>
			<h1>Concessions</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default ConcessionScreen;
