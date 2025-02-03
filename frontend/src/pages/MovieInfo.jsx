import React from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating/Rating";
import "./MovieInfo.css";

const MovieInfo = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-image-wrapper">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="movie-image"
        />
        <div className="movie-info-overlay">
          <div className="movie-header">
            <h2>{movie.title}</h2>
            <p className="release-date">Release Date: {movie.releaseDate}</p>
          </div>
          <p className="movie-description">{movie.description}</p>
          <div className="movie-meta">
            <span><strong>Genre:</strong> {movie.genre}</span>
            <span><strong>Duration:</strong> {movie.duration} mins</span>
          </div>
          <div className="rating-section">
            <div className="critics-rating">
              <strong>Critics Rating:</strong> {movie.criticsRating}
            </div>
            <div className="users-rating">
              <strong>Users Rating:</strong> <Rating rating={movie.rating} />
            </div>
          </div>
        </div>
      </div>
      <div className="review-container">
        <textarea
          className="review-textarea"
          placeholder="Write your review here..."
        />
        <button className="review-button">Submit Review</button>
      </div>
      <div className="social-buttons">
        <button className="social-btn">Share</button>
        <button className="social-btn">Like</button>
      </div>
    </div>
  );
};

export default MovieInfo;
