import React from 'react'
import { useSelector } from 'react-redux'
import { getWatchlist } from '../features/movies/movieSlice'
import './Watchlist.scss'
import WatchlistDetail from './WatchlistDetail'

const Watchlist = () => {
  //const watchlist = useSelector(getWatchlist)
  const { watchlist } = useSelector((state) => state.movies);

  return (
    <div className='movie-wrapper'>
        <div className='movie-list'>
            <h2>My Watchlist</h2>
            <div className='movies-container'>
                { watchlist && watchlist.length && watchlist.map(movie => <WatchlistDetail key={movie.backdrop_path} data={movie} />)}
            </div>
        </div>
    </div>
  )
}

export default Watchlist