import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import { Alert } from "./Alert";

export function ResetPassword() {
  const [user, setUser] = useState({
    email: "",
  });

  const { resetPassword } = useAuth();
  const [error, setEror] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setEror("");
    if (!user.email) return setEror("Ingresa tu correo ");
    try {
      await resetPassword(user.email);
      setEror("te enviamos un correo para recuperar tu cuenta");
      console.log("enviado");
    } catch (error) {
      setEror(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      <h1 className="text-center font-bold p-3 text-white text-lg">
        Recuperar Contraseña
      </h1>
      {error && <Alert message={error} />}

      <form
        onSubmit={handleResetPassword}
        className="bg-white/30 backdrop-blur-md shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold my-2"
          >
            Ingresa tu Correo
          </label>
          <input
            type="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="tucorreo@compañia.ltd"
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-8 rounded focus:outline focus:shadow-outline w-full"
          onClick={handleResetPassword}
        >
          Envia al correo
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        ¿ya tienes una cuenta? <Link to="/login">Inicia Sesion</Link>
      </p>
    </div>
  );
}
