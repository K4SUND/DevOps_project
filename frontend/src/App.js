import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieInfo from "./pages/MovieInfo";
import Navbar from "./components/Navbar";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Movies from "./pages/Movies";

function App() {
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
          <Route path="/" element={<Movies />} />
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
