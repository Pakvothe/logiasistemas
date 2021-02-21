import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { ContactStyled } from '../styles/styled_contact';
import Fade from 'react-reveal/Fade';

const Contact = () => {
	const theme = useSelector((state) => state.theme);

	return (
		<ContactStyled>
			<Fade>
				{/* <form onSubmit={sendEmail}> */}
				<form>
					<div className='flex-form-container'>
						<h1 className='title'>Contacto</h1>
						<label>
							<span
								style={{
									background:
										theme === 'dark' ? '#2d2d2d' : 'white',
								}}
							>
								Nombre
							</span>
							<input
								className='inputs'
								style={{
									color: theme === 'dark' ? 'white' : 'black',
									background:
										theme === 'dark' ? '#2d2d2d' : 'white',
								}}
								type='text'
								name='name'
								required
							/>
						</label>
						<label>
							<span
								style={{
									background:
										theme === 'dark' ? '#2d2d2d' : 'white',
								}}
							>
								Correo
							</span>
							<input
								className='inputs'
								style={{
									color: theme === 'dark' ? 'white' : 'black',
									background:
										theme === 'dark' ? '#2d2d2d' : 'white',
								}}
								type='email'
								name='email'
								required
							/>
						</label>
						<label>
							<span
								style={{
									background:
										theme === 'dark' ? '#2d2d2d' : 'white',
								}}
							>
								Asunto
							</span>
							<input
								className='inputs'
								style={{
									color: theme === 'dark' ? 'white' : 'black',
									background:
										theme === 'dark' ? '#2d2d2d' : 'white',
								}}
								type='text'
								name='subject'
								required
							/>
						</label>
						<label>
							<span
								style={{
									background:
										theme === 'dark' ? '#2d2d2d' : 'white',
								}}
							>
								Mensaje
							</span>
							<textarea
								style={{
									color: theme === 'dark' ? 'white' : 'black',
									background:
										theme === 'dark' ? '#2d2d2d' : 'white',
								}}
								className='inputs'
								name='message'
								placeholder='Este formulario me envía un correo directamente a mi casilla. Sientete libre de escribirme.'
								required
							/>
						</label>
						<input
							className='submit'
							type='submit'
							value='Enviar Mensaje'
						/>
					</div>
				</form>
			</Fade>
		</ContactStyled>
	);
};

export default Contact;
