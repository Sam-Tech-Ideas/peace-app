import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import img from "../assets/peace.png";
import { FaTimes } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const links = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "About",
      url: "/about",
    },
    {
      id: 3,
      text: "Services",
      url: "/services",
    },
    {
      id: 4,
      text: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav
      className="w-full  h-[90vh]  bg-cover bg-center bg-no-repeat"
      style={{
        //backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/peaceful-d5db9.appspot.com/o/M2.JPG?alt=media&token=c6dcf635-cf06-4eec-9376-c55f52499bc8")`,
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
        //linear gradient
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),url("https://firebasestorage.googleapis.com/v0/b/peaceful-d5db9.appspot.com/o/M2.JPG?alt=media&token=c6dcf635-cf06-4eec-9376-c55f52499bc8")`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 sm:bg-transparent bg-white"
        style={{}}
      >
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-sm sm:text-lg items-center font-bold flex text-primary sm:text-white">
                <img
                  src={img}
                  style={{
                    opacity: "0.9",
                  }}
                  className="w-16 h-14"
                  alt="logo"
                />
                <span className="ml-2">PEACEFUL DREAMENT ENTERPRISE</span>
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block duration-750 md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {links.map((link) => (
                <li
                  key={link.id}
                  onClick={() => setNavbar(!navbar)}
                  className={`${
                    location.pathname === link.url ? "active-link " : ""
                  }`}
                >
                  <Link
                    to={link.url}
                    className="text-base font-medium text-primary sm:text-white hover:text-blue-500"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
