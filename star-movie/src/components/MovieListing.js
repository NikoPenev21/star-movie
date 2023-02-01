import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../features/movies/movieSlice'
import MovieDetail from './MovieDetail';
import './MovieListing.scss'
import { fetchMoviesAction } from '../redux/Actions'
import MoviesApi from '../services/MoviesApi';

const MovieListing = () => {
    // const movies = useSelector(getAllMovies);
    // console.log('movies',movies)

  const { movies } = useSelector((state) => state.movies);
	const dispatch = useDispatch();

  const fetchMovies = async () => {
		try {
			const data = await MoviesApi.getMovies();
      console.log("data11", data)
			dispatch(fetchMoviesAction(data));
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);


  return (
    <div className='movie-wrapper'>
        <div className='movie-list'>
            <h2>Movies</h2>
            <div className='movie-container'>
                { movies && movies.length && movies.map(movie => <MovieDetail key={movie.id} data={movie} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieListing