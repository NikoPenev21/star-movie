
import * as actions from './ActionsTypes'


const initialState = {
	movies: [],
	foundMovies: [],
	watchlist: window.localStorage.getItem('watchlist') ? JSON.parse(window.localStorage.getItem('watchlist')) : [],
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
        case actions.FETCH_MORE_MOVIES:
            const loadedMovies = state.movies;
            const newBatchMovies = [...loadedMovies, ...action.payload]
            return {
                ...state,
                movies: newBatchMovies,
            };
		case actions.SEARCH_MOVIES:
			const searchedMovies = state.foundMovies;
            const newFoundMovies = [...searchedMovies, ...action.payload]
			return {
				...state,
				foundMovies: newFoundMovies,
			};
		case actions.ADD_TO_WATCHLIST:
			const newMovies = [action.payload, ...state.watchlist];
			window.localStorage.setItem('watchlist', JSON.stringify(newMovies));
			return {
				...state,
				watchlist: newMovies,
			};
		case actions.REMOVE_FROM_WATCHLIST:
			const originalWatch = state.watchlist;
			const filtredWatch = originalWatch.filter((f) => f.id !== action.payload);
			window.localStorage.setItem('watchlist', JSON.stringify(filtredWatch));
			return {
				...state,
				watchlist: filtredWatch,
			};
		default:
			return state;
	}
};