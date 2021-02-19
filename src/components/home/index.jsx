import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import { StyledHome } from '../styles/styled_home';
import { Parallax } from 'react-parallax';
import homeback from '../../assets/img/homeback.jpg';

const Home = () => {
	const history = useHistory();

	const handleProduct = () => {
		history.push('/products');
	};
	return (
		<StyledHome>
			<Parallax bgImage={homeback} bgImageAlt='obelisco' strength={500}>
				<div className='ParallaxInside'>
					<div className='sideBar'>
						<div className='sideItems'>
							<h3>Seguridad</h3>
							<p>Electronica</p>
						</div>
						<div className='sideItems'>
							<p>Sistemas inteligentes,</p>
							<p>personas inteligentes.</p>
						</div>
						<div className='sideItems'>
							<Link to='/contact' className='ContactButton'>
								Contactenos
							</Link>
						</div>
					</div>
				</div>
			</Parallax>
			<div className='intro'>
				<p>
					Somos una empresa jov﻿en y pujante cuyo objetivo es acercar
					hacia la excelencia tecnológica en seguridad y
					comunicaciones a todos los entes públicos, privados y a toda
					la comunidad en su conjunto!{' '}
				</p>
			</div>
			<h1 className='homeTitle'>Nuestros servicios</h1>
			<div className='CardContainer'>
				<div className='Card' onClick={handleProduct}>
					<p className='cardTitle'>Sistema de Monitoreo</p>
					<p className='cardInfo'>
						Es un sistema de monitoreo en tiempo real mediante la
						utilización de Grabadoras Digitales, distintos tipos de
						cámaras (box, infrarrojas, antivandalicas, resistentes
						al agua, con audio, etc.) Por ende se puede visualizar
						desde una PC como circuito cerrado y en forma remota a
						través de internet mediante una PC, tablet o teléfono
						inteligente (Android o iOS).
					</p>
				</div>
				<div className='Card' onClick={handleProduct}>
					<p className='cardTitle'>Portero Visor electrónico</p>
					<p className='cardInfo'>
						Es un sistema de portero electrónico con cámara
						incorporada para visualizar al visitante, ademas permite
						al visitante dejar mensajes de vídeo cuando no hay nadie
						en la vivienda.El sistema admite múltiples paneles tanto
						exteriores como interiores. Ademas se le puede agregar
						control de acceso.
					</p>
				</div>
				<div className='Card' onClick={handleProduct}>
					<p className='cardTitle'>Control de Acceso</p>
					<p className='cardInfo'>
						Es un sistema de control de acceso que permite controlar
						1 como múltiples puertas mediante tarjetas de
						proximidad, llaveros de proximidad, huellas dactilares
						y/o rostros. Pueden ser autónomos o con reporte. Permite
						desde 1000 usuarios hasta 30000 usuarios. Ademas
						contamos con todos los accesorios de herrajes y
						cerraduras.
					</p>
				</div>
				<div className='Card' onClick={handleProduct}>
					<p className='cardTitle'>
						Detección de Incendio/Inundación
					</p>
					<p className='cardInfo'>
						Es un sistema de detección de incendio e inundación
						electrónico mediante detectores de humo, llama,
						temperatura y humedad. El sistema emite alertas sonoras,
						lumínicas y mediante SNMP y correo electrónico a una PC
						o teléfono inteligente.
					</p>
				</div>
				<div className='Card' onClick={handleProduct}>
					<p className='cardTitle'>Control de Acceso</p>
					<p className='cardInfo'>
						Es una central de alarma electrónica e inalámbrica con
						llamador por red celular GSM, no necesita una linea de
						teléfono convencional (Telefónica, Telecom,
						Cooperativas), solo un chip celular (postpago o prepago
						de cualquier compañía (Movistar, Personal, Claro,
						Nextel) evitando así posibles cortes en la linea de
						teléfono y evitando de plano la interrupción de la
						comunicación de la alarma.
					</p>
				</div>
			</div>
			<h1 className='homeTitle'>
				Sistemas inteligentes, personas inteligentes.
			</h1>
		</StyledHome>
	);
};

export default Home;
