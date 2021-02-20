import styled from 'styled-components';

export const ContactStyled = styled.div`
	margin: 2em auto;
	border: 2px solid var(--clr-primary-dark);
	padding: 2em 4em;
	border-radius: 1em;
	display: flex;
	flex-direction: column;
	text-align: center;
	box-shadow: 0 7px 30px rgba(0, 0, 0, 0.7);

	.title {
		font-size: 2em;
		margin-bottom: 1em;
		color: var(--clr-primary-dark);
		font-weight: bold;
		text-align: center;
	}

	.container1 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-bottom: 1em;

		p {
			margin-bottom: 0.5em;
		}
	}

	.container2 {
		text-align: center;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		p {
			margin-bottom: 0.5em;
		}

		a {
			text-decoration: none;
			color: var(--clr-primary-dark);
			font-weight: bold;
			width: 100%;
		}
	}

	@media (max-width: 500px) {
		margin: 2em;
		padding: 1.5em;
		.title {
			font-size: 1.4em;
		}

		.container1 {
			font-size: 0.9em;
		}
		.container2 {
			font-size: 0.9em;
		}
	}
`;
