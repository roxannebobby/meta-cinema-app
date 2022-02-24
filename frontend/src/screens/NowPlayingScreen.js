import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Movie from '../components/Movie.js';


const NowPlayingScreen = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const getMovies = async (req, res) => {
			const { data } = await axios.get('https://imdb-api.com/API/IMDbList/k_63n35dtw/ls093462543');
      console.log(data)
      console.log(data.title)
			setMovies(data);
		};
		getMovies();
	}, []);

	return (
		<>
			<h1>Now Playing</h1>
			<Row>
				{movies.map((movie) => (
					<Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
						</Col>
				))}
			</Row>
		</>
	);
}

export default NowPlayingScreen

