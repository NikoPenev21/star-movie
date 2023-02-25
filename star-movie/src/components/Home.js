import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import movieApi from '../common/apis/movieApi'
import { APIKey} from '../common/apis/MovieApiKeys'
import { addMovies } from '../features/movies/movieSlice'
import MovieListing from './MovieListing'
import { fetchMoviesAction } from '../redux/Actions'
import MoviesApi from '../services/MoviesApi'

const Home = () => {

   //const { movies } = useSelector((state) => state.movies);
   const dispatch = useDispatch();




   
  // const fetchMovies = async() => {
  //   const response = await movieApi.get(`movie?api_key=${APIKey}`)
  //   dispatch(addMovies(response.data.results))
  // }

  // useEffect(() => {
  //   fetchMovies();
  // }, [])

  // const fetchMovies = async () => {
	// 	try {
	// 		const data = await MoviesApi.getMovies();
  //     console.log("data", data)
	// 		dispatch(fetchMoviesAction(data));
	// 	} catch (error) {
	// 		console.log(error.response);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchMovies();
	// }, []);

  return (
  <>
    <div className='banner-img'></div>
    <MovieListing />
  </>
  )
}

export default Home