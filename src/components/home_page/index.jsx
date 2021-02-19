import React, { useRef } from 'react';
import { Route } from 'react-router-dom';

//components ==>
import Home from '../home';
import Navbar from '../navbar';
import AboutUs from '../about_us';
import Contact from '../contact';
import Products from '../products';
import Footer from '../footer';

//styles ==>
import arrowUp from '../../assets/img/arrow-up.svg';
import { StyledSVG, ScrollButton } from '../styles/GlobalStyle';
import { animateScroll } from 'react-scroll';

const HomePage = () => {
	const scrollButton = useRef();

	window.onscroll = function () {
		scrollFunction();
	};
	const scrollDistance = 400;

	function scrollFunction() {
		if (scrollButton.current) {
			if (
				document.body.scrollTop > scrollDistance ||
				document.documentElement.scrollTop > scrollDistance
			) {
				scrollButton.current.style.pointerEvents = 'auto';
				scrollButton.current.style.opacity = '100';
			} else {
				scrollButton.current.style.pointerEvents = 'none';
				scrollButton.current.style.opacity = '0';
			}
		}
	}

	const scrollToTop = () => {
		animateScroll.scrollToTop();
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				minHeight: '100vh',
			}}
		>
			<Navbar />
			<Route exact path='/logiasistemas/'>
				<Home />
			</Route>
			<Route exact path='/logiasistemas/about'>
				<AboutUs />
			</Route>
			<Route exact path='/logiasistemas/products'>
				<Products />
			</Route>
			<Route exact path='/logiasistemas/contact'>
				<Contact />
			</Route>
			<Footer />
			<ScrollButton ref={scrollButton} onClick={scrollToTop}>
				<StyledSVG src={arrowUp} />
			</ScrollButton>
		</div>
	);
};

export default HomePage;
