import React from 'react';
import { Container } from 'react-bootstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import ConcessionScreen from './ConcessionScreen';
import ProductScreen from './ProductScreen';
import MixedScreen from './MixedScreen';
import MovieScreen from './MovieScreen';
import NowPlayingScreen from './NowPlayingScreen';

const HomeScreen = () => {
	return (
		<Router>
			<main className='py-3'>
				<Container>
					<Route path='/' component={MixedScreen} exact />
					<Route path='/concessions' component={ConcessionScreen} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/movies' component={NowPlayingScreen} />
					<Route path='/movies/:id' component={MovieScreen} />
				</Container>
			</main>
		</Router>
	);
};

export default HomeScreen;
