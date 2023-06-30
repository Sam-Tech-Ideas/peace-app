

import React from "react";
import { FaTimes } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import img from "../assets/peace.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About Us",
    },
    {
      id: 3,
      link: "Services",
    },
  ];
  return (
    <>
      <div className=" w-screen shadow-lg  fixed bg-white  h-20 text-black z-20  mb-4 md:px-8">
        <div className="flex items-center justify-between w-full h-full md:px-8">
          <div className="flex items-center   py-14">
            <img src={img} alt="" height="" width="" className="h-16 " />
          </div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="p-4 hover:text-blue-600 duration-300 text-md cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
         

          <div
            className=" md:hidden cursor-pointer p-8"
            onClick={() => {
              setNav(true);
            }}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>

        {/**menu */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-full bg-gray-600/70 backdrop-blur"
              : ""
          }
        >
          <div
            className={
              nav
                ? "shadow-xl fixed left-0 top-0 w-4/5 bg-blue-300 text-white h-full p-10 ease-in duration-300"
                : "fixed top-0 left-[-100%] p-10 duration-300 ease-in h-full "
            }
          >
            <div className="flex items-center justify-between w-full text-black ">
              <img src={img} alt="" height="" width="" className="h-20 w-10" />

              <div onClick={() => setNav(false)} className="cursor-pointer p-3">
                <FaTimes size={30} />
              </div>
            </div>
            <ul className="pt-10">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="p-4 hover:text-blue-600 duration-300 text-lg cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
