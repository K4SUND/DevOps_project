import React from "react";
  // Import the MovieCard component
import "./MoviesPage.css";
import MovieCard from "../../components/MovieCard/MovieCard";

const MoviesPage = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: "20px" }}>
            {/* Use the MovieCard component for each movie */}
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
