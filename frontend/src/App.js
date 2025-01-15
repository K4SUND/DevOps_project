import React from "react";
import MovieInfo from "./pages/MovieInfo";

function App() {
  const movie = {
    title: "The Dark Knight",
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseDate: "2008-07-18",
    rating: 9.0,
    imageUrl: "data:image/jpeg;base64,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",
  };

  return (
    <div className="App">
      <MovieInfo
        title={movie.title}
        description={movie.description}
        releaseDate={movie.releaseDate}
        rating={movie.rating}
        imageUrl={movie.imageUrl}
      />
    </div>
  );
}

export default App;
