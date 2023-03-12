import { Link, useNavigate } from "react-router-dom";
import { FaFilm } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-green-800 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-green-500">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a
            href="https://github.com/andrez114/react-task.git"
            className="flex items-center"
          >
            <FaFilm className="text-white/90 w-7 h-7 mx-3 sm:w-12 sm:h-12 " />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              viewMovies
            </span>
          </a>
          <div className="flex md:order-2">
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-green-500 hover:bg-green-800 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:hover:bg-green-600 dark:focus:ring-green-800"
              >
                Inicia Sesion
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-green-800 md:dark:bg-green-900 dark:border-green-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-green-600 rounded md:bg-transparent md:text-green-300 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
