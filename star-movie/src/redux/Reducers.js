
import * as actions from './ActionsTypes';

const initialState = {
	movies: [],
	watchlist: window.localStorage.getItem('watchlist') ? JSON.parse(window.localStorage.getItem('watchlist')) : [],
};

console.log("initialState", initialState)

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
		case actions.ADD_TO_WATCHLIST:
			const newMovie = [...state.watchlist, action.payload];
            console.log("newMovie", newMovie)
			window.localStorage.setItem('watchlist', JSON.stringify(newMovie));
			return {
				...state,
				watchlist: newMovie,
			};
		case actions.REMOVE_FROM_WATCHLIST:
			const originalWatch = state.watchlist;
			const filtredWatch = originalWatch.filter((f) => f.id !== action.payload);
			return {
				...state,
				watchlist: filtredWatch,
			};
		default:
			return state;
	}
};