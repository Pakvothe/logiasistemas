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
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	WhatsappIcon,
} from 'react-share';

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
							<FacebookShareButton
								quote='Logia Sistemas: Somos una empresa jov﻿en y pujante cuyo objetivo es acercar hacia la excelencia tecnológica en seguridad y comunicaciones a todos los entes públicos, privados y a toda la comunidad en su conjunto!'
								url='https://pakvothe.github.io/logiasistemas/'
							>
								<FacebookIcon round={true} size='2em' />
							</FacebookShareButton>
							<TwitterShareButton
								url='https://pakvothe.github.io/logiasistemas/'
								title='Logia Sistemas: Sistemas inteligentes, personas inteligentes.'
							>
								<TwitterIcon round={true} size='2em' />
							</TwitterShareButton>
							<WhatsappShareButton
								url='https://pakvothe.github.io/logiasistemas/'
								title='Logia Sistemas: Sistemas inteligentes, personas inteligentes.'
								separator=':: '
							>
								<WhatsappIcon round={true} size='2em' />
							</WhatsappShareButton>
							<LinkedinShareButton
								title='Logia Sistemas: Sistemas inteligentes, personas inteligentes.'
								url='https://pakvothe.github.io/logiasistemas/'
								windowWidth={750}
								windowHeight={600}
							>
								<LinkedinIcon round={true} size='2em' />
							</LinkedinShareButton>
						</div>
					</div>
					<div className='ItemContainer'>
						<h3>Contacto</h3>

						<a href='mailto:info@logiasistemas.com.ar'>
							info@logiasistemas.com.ar
						</a>
						<p>Teléfono: (011) 2091-9175</p>
						<p>Móvil:(011) 2461-0062</p>
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
