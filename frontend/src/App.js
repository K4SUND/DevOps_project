import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieInfo from "./pages/MovieInfo";
import Navbar from "./components/Navbar";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  const movies = [
    {
      id: 1, // Added ID for routing
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
      usersRating: 4.0,
    },
    {
      id: 2,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      releaseDate: "2010-07-16",
      rating: 8.8,
      imageUrl:
        "data:image/jpeg;base64,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",
      genre: "Action, Sci-Fi, Thriller",
      duration: "2 hrs 28 mins",
      criticsRating: 4.0,
      usersRating: 4.5,
    },
    {
      id: 3,
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      releaseDate: "2014-11-07",
      rating: 8.6,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmS2fXunDUEBghw03CwGihiiA4FZlQMgy7Q&s",
      genre: "Adventure, Drama, Sci-Fi",
      duration: "2 hrs 49 mins",
      criticsRating: 4.6,
      usersRating: 4.8,
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      releaseDate: "1994-09-23",
      rating: 9.3,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
      genre: "Drama",
      duration: "2 hrs 22 mins",
      criticsRating: 4.9,
      usersRating: 4.9,
    },
    {
      id: 5,
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      releaseDate: "1972-03-24",
      rating: 9.2,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrD3L6CTTX8pgEZ0q0dqhul94HXgBNI9iPKw&s",
      genre: "Crime, Drama",
      duration: "2 hrs 55 mins",
      criticsRating: 4.8,
      usersRating: 4.8,
    },
    {
      id: 6,
      title: "Parasite",
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      releaseDate: "2019-05-30",
      rating: 8.6,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyJYd_sWzQdj87gwIiDRpi6JtzfY6-XLG-w&s",
      genre: "Comedy, Drama, Thriller",
      duration: "2 hrs 12 mins",
      criticsRating: 4.5,
      usersRating: 4.6,
    },
    {
      id: 7,
      title: "Avengers: Endgame",
      description:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins. The Avengers assemble once more to reverse Thanos' actions and restore balance.",
      releaseDate: "2019-04-26",
      rating: 8.4,
      imageUrl:
        "https://i5.walmartimages.com/seo/Avengers-Endgame-Blu-ray-Disney-Action-Adventure_2b72c548-795f-4ef7-bd8e-85c22831efb1_1.24ebc09db364381306af391247686237.jpeg",
      genre: "Action, Adventure, Sci-Fi",
      duration: "3 hrs 2 mins",
      criticsRating: 4.2,
      usersRating: 4.5,
    },
    {
      id: 8,
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      releaseDate: "1994-10-14",
      rating: 8.9,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      genre: "Crime, Drama",
      duration: "2 hrs 34 mins",
      criticsRating: 4.7,
      usersRating: 4.8,
    },
    {
      id: 9,
      title: "The Matrix",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      releaseDate: "1999-03-31",
      rating: 8.7,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      genre: "Action, Sci-Fi",
      duration: "2 hrs 16 mins",
      criticsRating: 4.5,
      usersRating: 4.7,
    },
  ];
  const [user, setUser] = useState(null);
  /*useEffect(() => {
    const token = getAuthToken();
    if (token) {
      // You can fetch user data if necessary
      setUser(true);  // For simplicity, assuming user is authenticated if there's a token
    }
  }, []);*/

  return (
    <Router>
      <div className="App">
      <Navbar user={user} />
        <Routes>
          {/* Movies list page */}
          <Route path="/" element={<MoviesPage movies={movies} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route
            path="/signup"
            element={<SignupPage />}
          />
          {/* Movie details page */}
          <Route
            path="/movie/:id"
            element={<MovieInfo user={user} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
