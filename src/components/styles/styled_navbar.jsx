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
		font-size: 1.6em;
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
`;

export const StyledSVG = styled(SVG)`
	height: 2em;
	cursor: pointer;

	@media (max-width: 480px) {
		height: 1.5em;
	}
`;
