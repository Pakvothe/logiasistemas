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
	}

	.container1 {
		margin-bottom: 1em;

		p {
			margin-bottom: 0.5em;
		}
	}

	.container2 {
		p {
			margin-bottom: 0.5em;
		}

		a {
			text-decoration: none;
			color: var(--clr-primary-dark);
			font-weight: bold;
		}
	}
`;
