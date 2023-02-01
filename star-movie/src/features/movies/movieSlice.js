import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : []
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            //console.log("action.payload", action.payload)
            state.movies = action.payload
            //console.log("state.movies", state.movies)
        },
        addToWatchlist: (state, action) => {
            //console.log("add to watchlist", action.payload)
            state.watchlist = [action.payload, ...state.watchlist]
            console.log("state.watchlist", state.watchlist)
        }
    }
})

export const  {addMovies, addToWatchlist} = movieSlice.actions;

export const getAllMovies = (state) =>  state.movies.movies;
export const getWatchlist = (state) => state.movies.watchlist;

export default movieSlice.reducer;