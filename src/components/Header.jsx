import { useState } from "react";
import logo from "../assets/fullLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartLength = useSelector((store) => store.cart.items.length);

  return (
    <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse"
          to={"/"}
        >
          <img src={logo} className="h-12" alt="Flowbite Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to={"/cart"}>
            <button
              type="button"
              className="text-dark  bg-[#ffdd59] hover:bg-[#e6c84f] focus:ring-4 focus:outline-none focus:ring-[#e4c442] font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-[#ffdd59] dark:hover:bg-[#e6c84f] dark:focus:ring-[#ffdd59]"
            >
              Cart ( {cartLength} )
            </button>
          </Link>{" "}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-[#ffdd59] rounded md:bg-transparent md:text-[#ffdd59] md:p-0 md:dark:text-[#ffdd59]"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ffdd59] md:p-0 md:dark:hover:text-[#ffdd59] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ffdd59] md:p-0 md:dark:hover:text-[#ffdd59] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ffdd59] md:p-0 md:dark:hover:text-[#ffdd59] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
