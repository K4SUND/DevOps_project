import React from "react";
import './MovieCard.css';
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    // Ensure movie.cast is defined before using .map
    const castList = (movie.cast || []).map((actor, index) => (
      <span key={index} className="movie-card__actor">
        {actor}
      </span>
    ));
  
    return (
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${movie.imageUrl})` }}
      >
        <div className="movie-card__overlay">
          <h3 className="movie-card__title">{movie.title}</h3>
          <p className="movie-card__description">{movie.description}</p>
          <div className="movie-card__info">
            <p>
              <strong>Director:</strong> {movie.director}
            </p>
            <p>
              <strong>Year:</strong> {movie.year}
            </p>
            <p>
              <strong>Duration:</strong> {movie.duration} mins
            </p>
            <div>
              <strong>Cast:</strong> {castList}
            </div>
          </div>
          <div className="movie-card__rating">
            <Rating rating={Math.round(movie.rating)} />
            <Link
              to={`/movie/${movie.id}`}
              className="movie-card__imdb-button"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  };
  

export default MovieCard;
