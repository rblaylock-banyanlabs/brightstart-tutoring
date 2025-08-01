import { useState } from "react";
import { LuGraduationCap } from "react-icons/lu";

const Header = () => {

    // State for managing the mobile menu toggle
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="font-inter bg-yellow-500 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-lg flex flex-wrap justify-between mx-auto p-4">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <LuGraduationCap size={32} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Bright Start Tutoring
            </span>
          </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev => !prev))} //Toggle menu state
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1" ${menuOpen ? "flex" : "hidden"}`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="#home"
                  id="home"
                  className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#tutors"
                  id="tutors"
                  className="block py-2 px-3 text-black font-normal rounded-sm md:p-0"
                >
                  Our Tutors
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  id="contact"
                  className="block py-2 px-3 text-black font-normal rounded-sm md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
