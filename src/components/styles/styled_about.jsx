import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StyledAbout = styled.div`
	.title {
		text-align: center;
		margin-top: 2em;
		color: var(--clr-primary-dark);
	}

	.CardContainer {
		display: flex;
		margin-bottom: 2em;
		justify-content: center;
		padding: 0 4em;

		flex-wrap: wrap;

		.Card {
			position: relative;
			margin: 1em;
			display: flex;
			flex-direction: column;
			align-items: center;
			cursor: pointer;
			width: 350px;
			height: 420px;
			border: 2px solid var(--clr-primary-dark);
			border-radius: 1em;
			padding: 1em;
			transition: background-color 0.2s ease-in-out;
			word-wrap: normal;
			box-shadow: 0 7px 30px rgba(0, 0, 0, 0.7);
			overflow: auto;

			.titleContainer {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				justify-content: space-around;

				.title {
					font-size: 1.5em;
					text-transform: uppercase;
					text-align: center;
					margin-bottom: 1em;
					color: var(--clr-primary-dark);
				}
			}

			.info {
				line-height: 1.3em;
				font-size: 16px;
			}
		}
	}

	@media (max-width: 900px) {
		.CardContainer {
			padding: 0;

			.Card {
				align-items: center;
				justify-content: center;
				width: 95%;
			}
		}
	}
`;
export const StyledSVG = styled(SVG)`
	height: 3em;
	cursor: pointer;
	fill: var(--clr-primary-dark);
	position: absolute;
	right: 10px;
	top: 10px;

	transition: fill 0.2s ease-in-out;

	&:hover {
		fill: var(--clr-primary-dark);
	}

	@media (max-width: 480px) {
		height: 2.5em;
	}
`;
