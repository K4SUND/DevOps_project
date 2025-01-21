import React from "react";

const Rating = ({ rating, maxRating = 5, size = "20px", color = "gold" }) => {
  // Create an array of stars based on the rating and maxRating
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <span
        key={i}
        style={{
          fontSize: size,
          color: i <= rating ? color : "lightgray",
        }}
      >
        ★
      </span>
    );
  }

  return <div>{stars}</div>;
};

export default Rating;
