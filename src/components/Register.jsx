import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setEror] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEror("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setEror(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      <h1 className="text-center font-bold p-3 text-lg text-white">
        Crear Cuenta
      </h1>

      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white/30 backdrop-blur-md shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold my-2"
          >
            Correo
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="tucorreo@compañia.ltd"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold my-2"
          >
            contraseña
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            name="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="******"
          />
        </div>

        <button className="bg-green-600 hover:bg-green-800 text-white text-sm font-bold py-2 px-2 rounded-lg focus:outline focus:shadow-outline w-full">
          Registrarse
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        ¿ya tienes una cuenta? <Link to="/login">Inicia Sesion</Link>
      </p>
    </div>
  );
}
