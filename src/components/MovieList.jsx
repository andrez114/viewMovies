import MovieCard from "./MovieCard";
import { useContext } from "react";
import { authContext } from "../context/authContext";

function MovieList() {
  const { movies } = useContext(authContext);

  if (movies.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        no hay peliculas aún
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
