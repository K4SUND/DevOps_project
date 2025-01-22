import React from "react";
import MovieInfo from "./pages/MovieInfo";  // Make sure MovieDetails is updated to match the new design
import Navbar from "./components/Navbar";

function App() {
  const movie = {
    title: "The Dark Knight",
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseDate: "2008-07-18",
    rating: 9.0,
    imageUrl:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFyayUyMGtuaWdodHxlbnwwfHwwfHx8MA%3D%3D",
    genre: "Action, Crime, Drama",
    duration: "2 hrs 32 mins",
    criticsRating: 3.5,
    usersRating: 4.0
  };

  return (
    <div className="App">
      <Navbar />
      <MovieInfo
        title={movie.title}
        description={movie.description}
        releaseDate={movie.releaseDate}
        rating={movie.rating}
        imageUrl={movie.imageUrl}
        genre={movie.genre}
        duration={movie.duration}
        criticsRating={movie.criticsRating}
        usersRating={movie.usersRating}
      />
    </div>
  );
}

export default App;
