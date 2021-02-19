import styled, { createGlobalStyle } from 'styled-components';
import SVG from 'react-inlinesvg';

// Estilos globales para habilitar el dark mode:
export const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.body};
		color:  ${({ theme }) => theme.text};
	
	}
`;
export const StyledSVG = styled(SVG)``;
export const ScrollButton = styled.button`
	pointer-events: none;
	opacity: 0;
	position: fixed;
	right: 50px;
	bottom: 60px;
	border: 0;
	padding: 0.3em;
	background: var(--clr-primary);
	color: var(--clr-light);
	border-radius: 999em;
	cursor: pointer;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
	transition: color 0.2s ease-in-out, opacity 1000ms ease-in-out;
	svg {
		fill: var(--clr-light);
		width: 2.5em;
		height: 2.5em;
	}
	&:hover {
		box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
		background: var(--clr-primary-dark);
		svg {
			fill: var(--clr-light);
		}
	}
	&:focus {
		outline: none;
	}
	@media (max-width: 480px) {
		right: 4px;
		bottom: 20px;
		padding: 0.3em;
		svg {
			width: 2.2em;
			height: 2.2em;
		}
	}
`;
