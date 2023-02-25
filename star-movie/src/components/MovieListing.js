import React, { useEffect }  from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import MovieCard from './MovieCard';
import './MovieListing.scss'
import { fetchMoviesAction, loadMoreMoviesAction, searchMoviesAction } from '../redux/Actions'
import MoviesApi from '../services/MoviesApi'
import { useState } from "react"


const MovieListing = () => {

  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [counts, setCounts] = useState({
    total_pages: 500,
    total_results: 10000
  });

  const { movies, foundMovies } = useSelector((state) => state.movies, shallowEqual);
	const dispatch = useDispatch();

  const hasNext = counts.total_pages > currentPage;

  const loadMoreItems = () => {
     // just set the page, the effect will respond to it
     if (hasNext) {
       setCurrentPage((page) => page + 1);
       console.log("currentPage in hasNext", currentPage)
     }
  };

  const onChangeSearch = (e) => {
    // reset page to 1 when changing search
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

   const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight - 1) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const fetchNewMovies = async (currentPage) => {
		try {
			const data = await MoviesApi.getMovies(currentPage);
			dispatch(loadMoreMoviesAction(data));
		  } catch (error) {
		}
	};

  const fetchMovies = async () => {
		try {
			const data = await MoviesApi.getMovies(currentPage);
			dispatch(fetchMoviesAction(data));
		} catch (error) {
		}
	};

  const searchMovies = async () => {
		try {
			const data = await MoviesApi.searchMovies(currentPage, searchValue);
			dispatch(searchMoviesAction(data));
		} catch (error) {
		}
	};

	useEffect(() => {
    if (searchValue !== "") { 
      console.log("has value")
      const delayDebounceFn = setTimeout(() => {
        console.log("currentPage", currentPage)
        console.log("searchValue", searchValue)
        console.log("foundMovies", foundMovies)
        foundMovies.length = 0;
        searchMovies(currentPage, searchValue)
      }, 500)

      return () => clearTimeout(delayDebounceFn)
       
    } else {
      foundMovies.length = 0;
      console.log("no value", currentPage)
      currentPage ===1 ? fetchMovies(currentPage) : fetchNewMovies(currentPage)
    }
	}, [searchValue, currentPage]);


  return (
    <>
    <div className='movie-wrapper'>
        <div className='movie-list'>
          <div className='search-wrapper'>
            <form className="search">
              <input 
              className="search" 
              type="search" 
              placeholder="Search a movie"
              onChange={onChangeSearch} />
            </form>
          </div>
          <div className='movie-container'>
              { foundMovies && foundMovies.length ? 
               foundMovies.map(foundMovie => <MovieCard key={foundMovie.id} data={foundMovie} />)
              : movies && movies.length && movies.map(movie => <MovieCard key={movie.id} data={movie} />)
              }
          </div>
        </div>
    </div>
    </>
  )
}

export default MovieListing