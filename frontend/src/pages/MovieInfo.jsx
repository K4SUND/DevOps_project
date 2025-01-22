import React, { useState } from "react";
import "./MovieInfo.css";

function MovieInfo({ title, description, releaseDate, rating, imageUrl, genre, duration, criticsRating, usersRating }) {
  const [review, setReview] = useState("");

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleAddReview = () => {
    if (review.trim()) {
      alert(`Review added: ${review}`);
      setReview(""); // Clear review after submission
    } else {
      alert("Please enter a review!");
    }
  };

  return (
    <div className="movie-details-container">
      <div className="movie-image-wrapper">
        <img src={imageUrl} alt={title} className="movie-image" />
        <div className="movie-info-overlay">
          <div className="movie-header">
            <h2>{title}</h2>
            <p className="release-date">{new Date(releaseDate).toLocaleDateString()}</p>
          </div>
          <p className="movie-description">{description}</p>
          <div className="movie-meta">
            <span className="duration">{duration}</span>
            <span className="genre">{genre}</span>
          </div>
          <div className="rating-section">
            <div className="critics-rating">
              <strong>Critic's Rating:</strong> {criticsRating}/5
            </div>
            <div className="users-rating">
              <strong>Avg. User's Rating:</strong> {usersRating}/5
            </div>
          </div>
        </div>
      </div>
      <div className="review-container">
            <textarea
              value={review}
              onChange={handleReviewChange}
              placeholder="Add your review here..."
              rows="4"
              className="review-textarea"
            />
            <button className="review-button" onClick={handleAddReview}>
              Add Review
            </button>
          </div>
    </div>
  );
}

export default MovieInfo;
