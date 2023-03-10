import { useState, useContext } from "react";
import { authContext } from "../context/authContext";
import { uploadFile } from "../firebase";

function MovieForm() {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [file, setFile] = useState(null);
  const { createMovie } = useContext(authContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const MovieImage = await uploadFile(file);
      createMovie({
        titulo,
        genero,
        MovieImage,
      });

      setTitulo("");
      setGenero("");
      setFile(null);
      user_avatar.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto pt-3">
      <form
        onSubmit={handleSubmit}
        className="bg-white/25 backdrop-blur-md shadow-md rounded-3xl p-10 mb-4"
      >
        <h1 className="text-2xl font-bold text-center text-white mb-3">
          Añadir una pelicula
        </h1>
        <input
          placeholder="titulo de la pelicula"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          autoFocus
          className="bg-white/50 placeholder:text-green-600 p-3 w-full mb-2 rounded-lg"
          required
          minLength="4"
        />
        <textarea
          placeholder="genero"
          onChange={(e) => setGenero(e.target.value)}
          value={genero}
          required
          size="10"
          minLength="4"
          className="bg-white/50 placeholder:text-green-600 p-3 w-full mb-2 rounded-lg"
        />
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-green-600 focus:outline-none bg-white/50 dark:border-gray-600 dark:placeholder-gray-400 mb-5 mt-0.5"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button className="bg-green-500 hover:bg-green-700 rounded-lg px-3 py-1 text-white">
          Guardar tu tarea
        </button>
      </form>
    </div>
  );
}

export default MovieForm;
