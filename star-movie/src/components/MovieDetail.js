import React, {useEffect, useReducer} from 'react'
import './MovieDetail.scss'
import * as Icon from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import StarRating from './StarRating'
import { useDispatch, useSelector } from 'react-redux'
import { addToWatchlist, getWatchlist } from '../features/movies/movieSlice'
import { addWatchlistAction, RemoveFromWatchlistAction } from '../redux/Actions';

const IMGPATH = "https://image.tmdb.org/t/p/w1280"

const MovieDetail = (props) => {
  const { watchlist } = useSelector((state) => state.movies);
  const dispatch = useDispatch();



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

  // const [watchlist, watchlisted] = useState(false);
  const [watchlisted] = useState(false);

  const handleWatchlist = () => {
    //watchlisted(!watchlist);

    //dispatch(addToWatchlist(data))
    dispatch(
      watchlist.find((m) => m.id == data.id)
        ? RemoveFromWatchlistAction(data.id)
        : addWatchlistAction(data)
    )
  };

  // useEffect(() => {
  //   localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  //   }, [state]);

  return (
    <div>
      <div className='card-item'>
        <div className='card-inner'>
          <div className='card-top'>
            <img src={IMGPATH + data.poster_path} alt={data.title} />
          </div>
          <div className='card-bottom'>
            <div className='rating-star-group'>
            <span><Icon.StarFill color="#f5c518"/>{' '}<span className='rating-number'>{data.vote_average}</span></span>
            {!pressed ? <Button onClick={handleShow} variant="outline-light" className='rate-button'><Icon.Star color="#5799ef"/></Button> : <span className='rating-span'><Icon.StarFill color="#5799ef"/>{' '}<span className='rating-number'>{rating}</span></span>}
            </div>
            <div className='card-info'>
              <h4 className='movie-title'>{data.title}</h4>
              <Button className="add-watchlist" variant="outline-primary" onClick={handleWatchlist}>{watchlist.find((m) => m.id == data.id) ? <i className="fa-solid fa-check"></i> : <i className="fa-sharp fa-solid fa-plus"></i>} Watchlist</Button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div className='rate-this'>Rate this:</div><p className='title'>{data.title}</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StarRating starFunction={onStarButtonClick}/> 
        </Modal.Body>
        <Modal.Footer>
          <Button className="rate-close-button" variant="warning" onClick={handleRate}>
            Rate
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MovieDetail