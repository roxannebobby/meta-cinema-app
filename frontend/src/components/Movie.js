import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/product/${movie.image}`}>
				<Card.Img src={movie.image} variant='top' />
			</Link>
			<Card.Body>
				<Link to={`/product/${movie.id}`}>
					<Card.Title as='div'>
						<strong>{movie.name}</strong>
					</Card.Title>
				</Link>
				<Card.Text as='div'>
					<Rating value={movie.rating} text={`${movie.numReviews} review(s)`} />
				</Card.Text>
				{/* <Card.Text as='h3'>${product.price}</Card.Text> */}
			</Card.Body>
		</Card>
	);
};

export default Movie;
