import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StyledAbout = styled.div`
	height: 100%;
	.title {
		text-align: center;
		margin-top: 2em;
		color: var(--clr-primary-dark);
	}

	.CardContainer {
		display: flex;
		margin-bottom: 2em;
		justify-content: space-between;
		align-items: center;
		padding: 2em;
		flex-wrap: wrap;

		.Card {
			position: relative;
			margin: 1em auto 2em auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 49%;
			border: 2px solid var(--clr-primary-dark);
			border-radius: 1em;
			min-height: 50vh;
			padding: 0 2em;
			word-wrap: normal;
			box-shadow: 0 7px 30px rgba(0, 0, 0, 0.7);

			.titleContainer {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				justify-content: space-around;

				.title {
					font-size: 1.5em;
					margin-bottom: 1em;
					text-align: left;
					width: 80%;
					text-align: center;
				}
			}

			.info {
				line-height: 1.3em;
				font-size: 16px;
			}
		}
	}
`;
export const StyledSVG = styled(SVG)`
	height: 3.5em;
	cursor: pointer;
	fill: var(--clr-primary-dark);
	position: absolute;
	right: 0.5em;
	top: 0.5em;

	transition: fill 0.2s ease-in-out;

	&:hover {
		fill: var(--clr-primary-dark);
	}

	@media (max-width: 480px) {
		height: 1.5em;
	}
`;
