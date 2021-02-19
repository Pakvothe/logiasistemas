import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//styles ==>
import { NavbarStyled, StyledSVG } from '../styles/styled_navbar.jsx';
import Fade from 'react-reveal/Fade';
//actions ==>
import { toggleTheme } from '../../redux/actions';

//logos ==>
import moon from '../../assets/img/moon.svg';
import sun from '../../assets/img/sun.svg';

const Navbar = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme);

	const handleTheme = () => {
		dispatch(toggleTheme());
	};

	return (
		<Fade>
			<NavbarStyled>
				<Link to='/' className='title'>
					<p>Logia Sistemas</p>
				</Link>

				<div className='navContainer'>
					<Link to='/'>Inicio</Link>
					<Link to='/products'>Productos</Link>
					<Link to='/about'>Sobre nosotros</Link>
					<Link to='contact'>Contacto</Link>
					<button onClick={handleTheme}>
						<StyledSVG src={theme === 'light' ? sun : moon} />
					</button>
				</div>
			</NavbarStyled>
		</Fade>
	);
};

export default Navbar;
