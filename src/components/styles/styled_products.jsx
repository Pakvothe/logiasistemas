import styled from 'styled-components';

export const StyledProducts = styled.div`
	padding: 0 2em;

	h1 {
		text-align: center;
		color: var(--clr-primary-dark);
		margin-bottom: 1em;
	}

	.container {
		display: flex;
		flex-wrap: wrap;

		.product {
			border: 2px solid var(--clr-primary-dark);
			border-radius: 1em;
			margin: 1em 0;
			display: flex;
			width: 100%;
			height: 420px;

			.productImg {
				min-width: 35%;
				height: 100%;
				border-top-left-radius: 1em;
				border-bottom-left-radius: 1em;
			}

			.info {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 0 1em;
				overflow: auto;

				.title {
					margin: 1em 0;
					font-size: 1.7em;
					text-transform: uppercase;
					text-align: center;
					color: var(--clr-primary-dark);
				}

				p {
					line-height: 1.3em;
					font-size: 20px;
				}
			}
		}
	}

	@media (max-width: 1300px) {
		padding: 1em;
		.container {
			.product {
				display: flex;
				flex-direction: column;
				height: 85vh;

				.productImg {
					width: 100%;
					min-height: 30%;
					max-height: 30%;
					border-top-left-radius: 1em;
					border-top-right-radius: 1em;
					border-bottom-left-radius: 0;
				}
			}
		}
	}
`;
