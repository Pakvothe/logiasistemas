import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StyledHome = styled.div`
	.ParallaxInside {
		height: 80vh;
		.sideBar {
			background-color: rgba(0, 0, 0, 0.8);
			width: 400px;
			height: 100%;
			box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.2);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
			padding: 3em;

			.sideItems {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 33%;

				&:first-child {
					color: var(--clr-primary);
					text-transform: uppercase;
					p {
						color: var(--clr-primary);
						font-size: 1.5em;
					}
					h3 {
						font-size: 2em;
						margin-bottom: 0.3em;
					}
				}

				p {
					color: white;
					margin-bottom: 0.3em;
				}

				.ContactButton {
					text-decoration: none;
					font-size: 1.5em;
					font-weight: bold;
					color: white;
				}
			}

			.contactContainer {
				border-radius: 99em;
				background-color: var(--clr-primary);
				transition: background-color 0.4s ease-in-out;
				cursor: pointer;
				height: 18%;
				width: 100%;
				&:hover {
					background-color: var(--clr-primary-dark);
				}
			}
		}
	}

	.intro {
		margin: 2em;
		text-align: center;
		font-size: 1.2em;
		font-style: italic;
	}

	.homeTitle {
		text-align: center;
		color: var(--clr-primary-dark);
		margin-bottom: 1em;
	}

	.CardContainer {
		padding: 0 4em;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		.Card {
			margin: 1em auto 2em auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			cursor: pointer;
			width: 30%;
			border: 2px solid var(--clr-primary-dark);
			border-radius: 1em;
			min-height: 60vh;
			padding: 2em;
			transition: background-color 0.2s ease-in-out;
			word-wrap: normal;
			box-shadow: 0 7px 30px rgba(0, 0, 0, 0.7);

			.cardTitle {
				font-size: 1.5em;
				text-transform: uppercase;
				text-align: center;
				margin-bottom: 1em;
				color: var(--clr-primary-dark);
			}

			.cardInfo {
				text-align: center;
				line-height: 1.3em;
				font-size: 16px;
			}

			&:hover {
				background-color: #101010;
				color: white;
			}
		}
	}

	@media (max-width: 1100px) {
		.CardContainer {
			.Card {
				align-items: center;
				justify-content: center;
				width: 45%;
			}
		}
	}
	@media (max-width: 800px) {
		.ParallaxInside {
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;

			.sideBar {
				width: 100%;
				height: 50%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-evenly;
			}

			.contactContainer {
				height: 20%;
				width: 200px;
			}

			.CardContainer {
				.Card {
					align-items: center;
					justify-content: center;
					width: 70%;
					min-height: 40vh;
				}
			}
		}
	}
	@media (max-width: 550px) {
		.CardContainer {
			padding: 0 1em;
			.Card {
				align-items: center;
				justify-content: center;
				width: 100%;
				min-height: 40vh;
			}
		}
		.intro {
			font-size: 1.1em;
		}
		.homeTitle {
			font-size: 1.7em;
			margin: 1em 5px;
		}
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
