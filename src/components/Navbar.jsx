import { useState } from "react";
import img from "../assets/peace.png";
import { FaTimes } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-xs sm:text-lg items-center font-bold flex ">
                 <img src={img} className="w-10 h-10" alt="logo" />
                <span className="ml-2">PEACEFUL 
                 DREAMENT ENTERPRISE
                </span>
                </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                 <AiOutlineClose size={24}/>
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
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Blog</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">About US</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
