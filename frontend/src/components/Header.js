import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>
						<i className='fa-solid fa-film'></i> MetaCinema
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mL-auto'>
							<Nav.Link href='/movies'>
								<i className='fas fa-ticket'>&nbsp;&nbsp;</i>Movies
							</Nav.Link>
							<Nav.Link href='/concessions'>
								<i className='fas fa-store'>&nbsp;&nbsp;</i>Concessions
							</Nav.Link>
							<Nav.Link href='/cart'>
								<i className='fas fa-shopping-cart'>&nbsp;&nbsp;</i>Cart
							</Nav.Link>
							<Nav.Link href='/login'>
								<i className='fas fa-user'>&nbsp;&nbsp;</i>Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
