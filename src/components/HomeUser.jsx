import { async } from "@firebase/util";
import { useAuth } from "../context/authContext";
import MovieList from "../components/MovieList";
import MovieForm from "./MovieForm";

export function HomeUser() {
  const { user, logout } = useAuth();

  const imageUser = "./public/user.svg";

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  /* console.log(user); */
  return (
    <div className="w-full max-w-screen-xl m-auto text-black ">
      <MovieForm />
      <div className="bg-white rounded shadow-md px-10 py-8 mb-4">
        <h1 className="text-xl text-center mb-4">
          Bienvenido {user.displayName || user.email}
        </h1>

        <div className="flex items-center justify-between my-2">
          <button
            onClick={handleLogout}
            className="bg-slate-200 hover:bg-slate-400 text-dark text-sm font-bold py-2 px-2 rounded focus:outline focus:shadow-outline max-w-sm"
          >
            cerrar sesion
          </button>
          <img
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={user.photoURL || imageUser}
          />
        </div>
        <MovieList />
      </div>
    </div>
  );
}
