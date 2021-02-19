import React from 'react';
import { ContactStyled } from '../styles/styled_contact';
import Fade from 'react-reveal/Fade';

const index = () => {
	return (
		<ContactStyled>
			<Fade>
				<p className='title'>Contacto</p>
				<div className='container1'>
					<p>Ventura Bustos 1935. Castelar (1712)</p>
					<p>Buenos Aires - Argentina</p>
				</div>
				<div className='container2'>
					<p>Teléfono: (011) 2091 -9175</p>
					<p>Móvil: (011) 2461 - 0062</p>
					<a href='mailto:info@logiasistemas.com.ar'>
						info@logiasistemas.com.ar
					</a>
				</div>
			</Fade>
		</ContactStyled>
	);
};

export default index;
