import styled from 'styled-components';

export const ContactStyled = styled.div`
	min-height: 70vh;

	.flex-form-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50%;
		margin: 0 auto;

		.title {
			text-align: center;
			color: var(--clr-primary-dark);
			line-height: 1.3em;
		}
	}

	.flex-form-container > div + div {
		margin-left: 3em;
	}
	@media (max-width: 1050px) {
		.flex-form-container > div + div {
			margin: 1.5em 0 0;
		}
	}

	.flex-form-container label {
		display: block;
		position: relative;
		width: 100%;
	}

	.flex-form-container label > span:not(.no-shadow) {
		position: absolute;
		left: 1em;
		top: -0.2em;
		padding: 0 0.5em;
		font-weight: 900;
		font-size: 0.9em;
	}

	.flex-form-container label > input,
	textarea {
		font: inherit;
		font-size: 0.8em;
		padding: 1em;
		border: 3px solid currentColor;
		border-radius: 1em;
		width: 100%;
		transition: box-shadow 0.2s ease;
		outline: none;
	}

	.flex-form-container label > textarea {
		padding: 1em 0.6em;
		line-height: 1.3;
	}

	.flex-form-container label:not(no-shadow)::after {
		content: '';
		position: absolute;
		top: 5px;
		bottom: -5px;
		left: 5px;
		width: 100%;
		border-radius: 1em;
		background: var(--clr-primary-dark);
		opacity: 0.15;
		transition: opacity 0.2s ease;
		z-index: -1;
	}

	.flex-form-container label:focus-within::after {
		opacity: 1;
	}

	.flex-form-container label + label {
		margin-top: 2em;
	}

	.flex-form-container input,
	textarea {
		width: 100%;
		display: block;
		border: 0;
		font: inherit;
		padding: 0.5em;
		border: 3px solid currentColor;
		border-radius: 1em;
		margin-top: 0.3em;
	}

	.flex-form-container input,
	textarea:focus {
		border-color: var(--clr-primary-dark);
	}

	.flex-form-container textarea {
		min-height: 150px;
		height: 100%;
		margin-bottom: 0.5em;
	}

	.flex-form-container .submit {
		width: 50%;
		border-radius: 1em;
		color: white;
		font-size: 1.2em;
		text-align: center;
		padding: 0.5em;
		font-weight: 600;
		background-color: var(--clr-primary-dark);
		border: 3px solid var(--clr-primary-dark);
		margin: 1em 0;
		box-shadow: 0 7px 30px rgba(0, 0, 0, 0.7);
		transition: color 0.2s ease-in-out;
	}
	.submit:hover {
		border-color: var(--clr-primary);
		cursor: pointer;
		box-shadow: inset 3px 3px 7px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 480px) {
		.flex-form-container input {
			width: 100%;
		}

		.flex-form-container {
			width: 90%;
			justify-content: center;
			align-items: center;
		}
		.flex-form-container label {
			align-items: center;
			justify-content: center;
		}
	}
`;
