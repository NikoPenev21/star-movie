import * as actions from './ActionsTypes';

export const fetchMoviesAction = (movies) => {
	return {
		type: actions.FETCH_MOVIES,
		payload: movies,
	};
};

export const addWatchlistAction = (movie) => {
	return {
		type: actions.ADD_TO_WATCHLIST,
		payload: movie,
	};
};

export const RemoveFromWatchlistAction = (id) => {
	return {
		type: actions.REMOVE_FROM_WATCHLIST,
		payload: id,
	};
};