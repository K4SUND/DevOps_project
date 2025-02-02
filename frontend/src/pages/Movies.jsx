import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_BASE_URL = "https://imdb236.p.rapidapi.com/imdb/top250-movies";
    const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
    const API_HOST = process.env.REACT_APP_RAPIDAPI_HOST;

    // Fetch Movies
    const fetchTopMovies = async () => {
        try {
            const res = await axios.get(API_BASE_URL, {
                headers: {
                    "x-rapidapi-key": API_KEY,
                    "x-rapidapi-host": API_HOST,
                },
            });

            setMovies(res.data || []);
            setLoading(false);

        } catch (err) {
            console.error("Error fetching top movies:", err);
            setError("Failed to fetch movies");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTopMovies();
    }, []);

    // MovieCard Component
    const MovieCard = ({ movie }) => {
        return (
            <div
                style={{
                    width: "250px",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    padding: "15px",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                <img
                    src={movie.primaryImage || "https://via.placeholder.com/250"}
                    alt={movie.primaryTitle}
                    style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "10px",
                    }}
                />
                <h3 style={{ fontSize: "1.2rem", margin: "10px 0", color: "#333" }}>
                    {movie.primaryTitle}
                </h3>
                <p style={{ margin: "5px 0", color: "#666" }}>Year: {movie.startYear}</p>
                <p style={{ margin: "5px 0", fontWeight: "bold", color: "#ff9800" }}>
                    ⭐ {movie.averageRating} ({movie.numVotes.toLocaleString()} votes)
                </p>
                <p style={{ fontSize: "0.9rem", color: "#888" }}>{movie.genres.join(", ")}</p>
            </div>
        );
    };

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
                padding: "20px",
                backgroundColor: "#f5f5f5",
                minHeight: "100vh",
            }}
        >
            {loading && <p style={{ fontSize: "1.5rem", color: "#555" }}>Loading...</p>}
            {error && <p style={{ fontSize: "1.5rem", color: "red" }}>{error}</p>}
            {!loading && !error && movies.length > 0 ? (
                movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            ) : (
                !loading && !error && <p style={{ fontSize: "1.5rem", color: "#555" }}>No movies found.</p>
            )}
        </div>
    );
}
