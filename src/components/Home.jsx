import Navbar from "./Navbar";
import { Link } from "react-router-dom";
export function Home() {
  /* console.log(user); */
  return (
    <div className="w-full max-w-4xl m-auto absolute mt-28 inset-x-0 top-0 container flex flex-wrap gap-3 flex-col items-center sm:bg-none bg-gradient-to-r from-cyan-600 to-green-700">
      <Navbar />
      <h2 className="text-center text-xl sm:text-3xl text-green-200 font-bold font-mono ">
        CONSULTA TUS
      </h2>
      <h1 className="text-center text-3xl sm:text-5xl text-green-200/75 font-bold font-mono">
        PELICULAS FAVORITAS
      </h1>
      <Link to="/register">
        <button
          type="button"
          className="text-gray-800 bg-green-500 hover:bg-green-900 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:hover:bg-green-600 dark:focus:ring-green-200"
        >
          REGISTRATE AHORA
        </button>
      </Link>
      <p className="text-center text-sm text-gray-300">
        *totalmente gratis y seguro
      </p>
      <div className="grid grid-cols-1 gap-7 sm:gap-24 sm:grid-cols-3">
        <img
          className="w-48 rounded-tl-2xl rounded-tr-2xl border-solid border-y-8 border-green-500/60 "
          src="https://firebasestorage.googleapis.com/v0/b/viewmovies-ccb60.appspot.com/o/poster-vengadores-endgame-1552567490.jpg?alt=media&token=b5be2f6e-2787-44c8-86c7-485b880c56bd"
          alt=""
        />
        <img
          className="w-48 rounded-tl-2xl rounded-tr-2xl border-solid border-y-8 border-green-500/60 "
          src="https://firebasestorage.googleapis.com/v0/b/viewmovies-ccb60.appspot.com/o/770197c2-cd1e-4337-bc55-6568c27aa6d3?alt=media&token=0b4ad4a6-cede-4311-bcb2-ff73ab9cbdb9
          "
          alt=""
        />
        <img
          className=" w-48 rounded-tl-2xl rounded-tr-2xl border-solid border-y-8 border-green-500/60 "
          src="https://firebasestorage.googleapis.com/v0/b/viewmovies-ccb60.appspot.com/o/spiderman.jpg?alt=media&token=ce4c94b1-0dcc-4e2b-b9ad-05ba22e843c7"
          alt=""
        />
      </div>
    </div>
  );
}
