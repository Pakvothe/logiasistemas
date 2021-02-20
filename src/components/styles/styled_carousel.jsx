import styled from 'styled-components';

export const StyledCarousel = styled.div`
	.embla {
		position: relative;
	}
	.embla__viewport {
		overflow: hidden;
		width: 100%;
	}
	.embla__viewport.is-draggable {
		cursor: move;
		cursor: grab;
	}
	.embla__viewport.is-dragging {
		cursor: grabbing;
	}
	.embla__container {
		display: flex;
		user-select: none;
		-webkit-touch-callout: none;
		-khtml-user-select: none;
		-webkit-tap-highlight-color: transparent;
		margin-left: -30px;
	}
	.embla__slide {
		position: relative;
		min-width: ${(props) => (props.full ? '100%' : '80%')};
		padding-left: ${(props) => (props.full ? '0' : '30px')};
	}
	.embla__slide__inner {
		display: flex;
		overflow: hidden;
		height: 86vh;
		min-height: ${(props) => (props.full ? '600px' : 'auto')};

		@media (max-width: 1000px) {
			min-height: auto;
			height: 50vh;
		}
		.embla__slide__detail {
			color: var(--clr-white);
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 2em 3em;
			background: transparent;
			background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 0, 0, 0.5) 100%
			);
			.slide__details__left {
				text-align: center;
				margin-right: 1em;
				a {
					text-decoration: none;
					color: var(--clr-white);
					transition: color 0.2s ease-in-out;
				}
			}
			.slide__details__right {
				text-align: right;
			}
			@media (max-width: 1000px) {
				font-size: 0.7em;
				height: 100%;
				flex-direction: column;
				padding: 2em;
				.slide__details__left {
					justify-self: flex-start;
					margin: 0;
					max-width: 100%;
					width: 100%;
				}
				.slide__details__right {
					text-align: center;
				}
			}
			.slide__title {
				font-size: 3em;
				margin-bottom: 1em;
				text-shadow: 5px 5px 0px var(--clr-primary-2),
					0 0 20px rgba(0, 0, 0, 0.5);
				transition: text-shadow 0.15s ease-in-out,
					transform 0.15s ease-in-out;
			}
		}
	}
	.embla__slide__img {
		display: block;
		min-height: 100%;
		width: 50%;
		max-width: none;
	}
	.embla__button {
		outline: 0;
		cursor: pointer;
		background-color: transparent;
		touch-action: manipulation;
		position: absolute;
		z-index: 1;
		top: 90%;
		transform: translateY(-50%) scale(1);
		border: 0;
		border-radius: 2em;
		background-color: var(--clr-primary);
		opacity: 0.8;
		box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.5);
		width: 40px;
		height: 40px;
		justify-content: center;
		align-items: center;
		padding: 0;
		transition: transform 0.4s ease;
		&:active {
			transform: scale(0.95) translateY(-50%);
		}
		&:hover {
			background-color: var(--clr-primary-dark);
		}
	}
	.embla__button:disabled {
		cursor: default;
		opacity: 0.3;
	}
	.embla__button__svg {
		width: 100%;
		height: 100%;
	}
	.embla__button--prev {
		left: 1em;
	}
	.embla__button--next {
		right: 1em;
	}

	@media (max-height: 850px) {
		.embla__slide__inner {
			height: 55vh;
		}
		@media (max-height: 750px) {
			.embla__slide__inner {
				height: 70vh;
			}
		}
		@media (max-height: 650px) {
			.embla__slide__inner {
				height: 80vh;
			}
		}
		@media (max-height: 570px) {
			.embla__slide__inner {
				height: 92vh;
			}
		}
	}
	@media (max-width: 600px) {
		.embla__slide__inner {
			flex-direction: column;

			.embla__slide__detail {
				height: 60%;
				padding: 0;
				.slide__title {
					font-size: 1.5em;
					margin-top: 1em;
				}
				.slide__details__left {
					height: 100%;
					padding: 1em;
					font-size: 0.9em;
					line-height: 1.2em;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-bottom: 1em;
				}
			}
		}
		.embla__slide__img {
			display: block;
			height: 40%;
			min-height: 40%;
			width: 100%;
			max-width: none;
		}
	}
`;
