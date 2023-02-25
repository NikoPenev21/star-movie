
import * as actions from './ActionsTypes'


const initialState = {
	movies: [],
	foundMovies: [],
	watchlist: window.localStorage.getItem('watchlist') ? JSON.parse(window.localStorage.getItem('watchlist')) : [],
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_MOVIES:
			console.log("FETCH_MOVIES action.payload" ,action.payload)
			return {
				...state,
				movies: action.payload,
			};
        case actions.FETCH_MORE_MOVIES:
			console.log("FETCH_MORE_MOVIES action.payload" ,action.payload)
            const loadedMovies = state.movies;
            const newBatchMovies = [...loadedMovies, ...action.payload]
            return {
                ...state,
                movies: newBatchMovies,
            };
		case actions.SEARCH_MOVIES:
			console.log("SEARCH_MOVIES action.payload" ,action.payload)
			console.log("state", state)
			const searchedMovies = state.foundMovies;
            const newFoundMovies = [...searchedMovies, ...action.payload]
			return {
				...state,
				foundMovies: newFoundMovies,
			};
		case actions.ADD_TO_WATCHLIST:
			const newMovie = [action.payload, ...state.watchlist];
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