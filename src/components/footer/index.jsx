import React from 'react';
import {
	StyledFooter,
	SignContainer,
	StyledSVG,
} from '../styles/styled_footer';
import facebook from '../../assets/img/facebook.svg';
import twitter from '../../assets/img/twitter.svg';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

const Footer = () => {
	return (
		<>
			<Fade>
				<StyledFooter>
					<div className='ItemContainer'>
						<h3>Dirección</h3>
						<p>Ventura Bustos 1935. Castelar (1712)</p>
						<p>Buenos Aires - Argentina</p>
					</div>
					<div className='ItemContainer'>
						<h3>Redomendanos</h3>
						<div className='SocialContainer'>
							<StyledSVG src={facebook} />
							<StyledSVG src={twitter} />
						</div>
					</div>
					<div className='ItemContainer'>
						<h3>Contacto</h3>

						<a href='mailto:info@logiasistemas.com.ar'>
							info@logiasistemas.com.ar
						</a>
						<p>Teléfono: (011) 2091-9175</p>
						<p>Móvil:(011) 2461-0064</p>
					</div>
				</StyledFooter>
			</Fade>
			<SignContainer>
				<Fade>
					<p>© Diseñado y desarrollado por </p>{' '}
				</Fade>
				<Tada>
					<a
						href='https://www.franco-ortiz.com/'
						target='_blank'
						rel='noreferrer'
					>
						Franco Ortiz
					</a>
				</Tada>
			</SignContainer>
		</>
	);
};

export default Footer;
