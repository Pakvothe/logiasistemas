import { TOGGLE_THEME } from '../constants';

const d = new Date();
const hours = d.getHours();
const night = hours >= 19 || hours <= 7; // between 7pm and 7am

const initialState = {
	theme: localStorage.getItem('theme') || (night ? 'dark' : 'light'),
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			localStorage.setItem(
				'theme',
				state.theme === 'light' ? 'dark' : 'light',
			);
			return {
				...state,
				theme: state.theme === 'light' ? 'dark' : 'light',
			};

		default:
			return state;
	}
};

export default Reducer;
