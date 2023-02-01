import React from 'react'
import './WatchlistDetail.scss'
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'


const IMGPATH = "https://image.tmdb.org/t/p/w1280"

const WatchlistDetail = (props) => {
  const { watchlist } = useSelector((state) => state.movies);


  const { data } = props;
  const [rating, setRating] = useState(0);
  

  const [show, setShow] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleClose = () => { setShow(false); }
  const handleShow = () => setShow(true);

  const handleRate = () => {
    if (pressed === false) { 
      setPressed(true) 
    } else setPressed(false);
    setShow(false);
  }

  const onStarButtonClick = (index) => {
    setRating(index);
  }

  //const [watchlist, watchlisted] = useState(false);
  const handleWatchlist = () => {
    //watchlisted(!watchlist);
  };


  return (
      <div className='movie-item'>
        <div className='inner'>
          <div className='image'>
            <img src={IMGPATH + data.poster_path} alt={data.title} />
          </div>
          <div className='item-content'>
            <div className='item-header'>{data.title}</div>
            <div className='item-details'>{data.release_date}</div>
            <div className='item-rating'>{data.vote_average} of {data.vote_count} votes</div>
            <div className='item-overview'>{data.overview}</div>
          </div>
        </div>
      </div>
  )
}

export default WatchlistDetail