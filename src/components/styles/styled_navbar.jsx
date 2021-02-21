import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const NavbarStyled = styled.nav`
	width: 100%;
	height: 6em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 3px solid var(--clr-primary-dark);

	.title {
		margin-left: 2em;
		text-decoration: none;
		color: currentColor;
		transition: color 0.2s ease-in-out;
		font-size: 1.8em;
		font-weight: bold;
		&:hover {
			color: var(--clr-primary-dark);
		}
	}

	.navContainer {
		margin-right: 2em;
		display: flex;
		justify-content: space-between;
		align-items: center;

		a {
			margin: 0 1.5em;
			transition: color 0.2s ease-in-out;
			text-decoration: none;
			color: currentColor;

			&:hover {
				color: var(--clr-primary-dark);
			}
		}

		button {
			background-color: transparent;
			color: currentColor;
			border: none;
			transition: color 0.2s ease-in-out;

			&:focus {
				outline: none;
			}

			&:hover {
				color: var(--clr-primary-dark);
			}
		}
	}

	@media (max-width: 920px) {
		height: 100%;
		flex-direction: column;
		padding: 1em 0;
		.title {
			margin: 0.5em auto;
			position: relative;
		}

		.navContainer {
			width: 100%;
			flex-direction: column;
			margin: 0 auto;

			a {
				margin-bottom: 0.5em;
			}

			button {
				position: absolute;
				top: 10px;
				right: 10px;
			}
		}
	}
`;

export const StyledSVG = styled(SVG)`
	height: 2em;
	cursor: pointer;
`;
