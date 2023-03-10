import { authContext, useAuth } from "../context/authContext";
import { useContext } from "react";

function MovieCard({ movie }) {
  const { deleteMovie } = useContext(authContext);
  const { loading } = useAuth();

  if (loading) return <h1 className="bg-slate-400">cargando</h1>;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
      <img className="rounded-t-lg" src={movie.MovieImage} />

      <h1 className="text-sm font-bold text-white capitalize">
        {movie.titulo}
      </h1>

      <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
        {movie.genero}
      </span>
      <button
        className=" bg-red-500 p-1 text-xs text-gray-200 rounded-md mb-1 hover:bg-red-400"
        onClick={() => {
          deleteMovie(movie.id, movie.MovieImage);
        }}
      >
        borrar
      </button>
    </div>
  );
}

export default MovieCard;
