import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StyledFooter = styled.footer`
	width: 100%;
	height: 11em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 3px solid var(--clr-primary-dark);

	.ItemContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: 33%;
		margin: auto;
		padding: 3em;

		h3 {
			margin-bottom: 1em;
			text-transform: uppercase;
		}

		p {
			margin-bottom: 0.1em;
		}

		.SocialContainer {
			display: flex;
			align-items: center;

			svg {
				margin: 0 0.2em;
			}
		}

		a {
			margin: 0 1.5em;
			margin-bottom: 0.1em;
			transition: color 0.2s ease-in-out;
			text-decoration: none;
			color: var(--clr-primary-dark);
		}
	}
	@media (max-width: 920px) {
		height: 100%;
		flex-direction: column;
		padding: 1em;

		.ItemContainer {
			padding: 1em;
			width: 100%;
			margin: 1em 0;

			p {
				font-size: 0.9em;
			}
		}
	}

	@media (max-width: 600px) {
		padding: 0.5em;

		.ItemContainer {
			padding: 0.4em;
			width: 100%;
		}
	}
`;
export const SignContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1em;

	a {
		margin-left: 5px;
		text-decoration: none;
		color: var(--clr-primary-dark);
		font-weight: bold;
	}

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;
export const StyledSVG = styled(SVG)`
	height: 2em;
	cursor: pointer;
	fill: currentColor;
	transition: fill 0.2s ease-in-out;

	&:hover {
		fill: var(--clr-primary-dark);
	}

	@media (max-width: 480px) {
		height: 1.5em;
	}
`;
