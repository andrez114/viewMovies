import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setEror] = useState("");

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEror("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setEror(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setEror(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      <h1 className="text-center font-bold text-white p-3 text-lg">
        Inicia sesion
      </h1>
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white/30 backdrop-blur-md shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2 "
          >
            Correo
          </label>
          <input
            type="email"
            name="email"
            placeholder="tucorreo@compañia.ltd"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2 "
          >
            contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between my-2">
          <button className="bg-cyan-600 hover:bg-cyan-800 text-white text-sm font-bold py-2 px-2 rounded-lg focus:outline focus:shadow-outline ">
            Iniciar
          </button>
          <a
            href="/resetPassword"
            className="inline-block align-baseline font-bold text-sm text-white hover:text-cyan-700"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>

      <p className="my-4 text-sm flex justify-between px-3">
        no tienes una cuenta <Link to="/register">Registrate</Link>
      </p>

      <div></div>

      <button
        onClick={handleGoogleSignin}
        className="bg-slate-50 hover:bg-slate-200 text-cyan-600 shadow-md rounded-full border-4 border-cyan-500 py-2 px-4 w-full flex justify-center font-bold"
      >
        entrar con google
        <img className="w-6 mx-2" src="./public/google-48.svg" />
      </button>
    </div>
  );
}
