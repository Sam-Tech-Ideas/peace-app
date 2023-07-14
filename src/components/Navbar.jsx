import React, { useState, useEffect } from "react";
import { FaArrowDown, FaTimes } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import img from "../assets/peace.png";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const links = [
    {
      id: 1,
      link: "Home",
      url: "/",
    },
    {
      id: 2,
      link: "About Us",
      url: "/about",
    },
    {
      id: 3,
      link: "Services",
      url: "/services",
    },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveLink(currentPath);
  }, [location.pathname]);

  return (
    <>
      <div className="w-screen shadow-lg fixed bg-white h-20 text-black z-20 mb-4 md:px-8">
        <div className="flex items-center justify-between w-full h-full md:px-8">
          <div className="flex items-center py-14 p-1">
            <img src={img} alt="" height="" width="" className="h-10" />
            <span className="text-md font-bold">PEACEFUL DREAMENT</span>
          </div>
          <ul className="hidden md:flex">
            {links.map(({ id, link, url }) => (
              <li
                key={id}
                className={`p-4 hover:text-blue-600 duration-300 text-md cursor-pointer ${
                  activeLink === url ? "text-blue-600"  : ""
                }`}
              >
                {link === "Services" ? (
                  <Menu>
                    <MenuHandler>
                      <Button className="shadow-none bg-transparent text-black text-md  font-medium capitalize m-0 p-0 hover:shadow-none hover:text-blue-500">
                        {link}
                        <AiOutlineDown className="inline-block ml-2" />
                      </Button>
                    </MenuHandler>
                    <MenuList>
                      <Link to="/services">
                        <MenuItem color="lightBlue" ripple="light">
                          Services
                        </MenuItem>
                      </Link>
                      <Link to="/blog">
                        <MenuItem color="lightBlue" ripple="light">
                          Blog/News
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>
                ) : (
                  <Link to={url}>{link}</Link>
                )}
              </li>
            ))}
          </ul>

          <div
            className="md:hidden cursor-pointer p-8"
            onClick={() => {
              setNav(true);
            }}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>

        {/* menu */}
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
                ? "shadow-xl fixed left-0 top-0 w-4/5 bg-white text-black h-full p-10 ease-in duration-300"
                : "fixed top-0 left-[-100%] p-10 duration-300 ease-in h-full "
            }
          >
            <div className="flex items-center justify-between w-full text-black ">
              <img src={img} alt="" height="" width="" className="h-10 w-" />
              <span className="text-xs font-bold ">
              PEACEFUL DREAMENT
              </span>

              <div onClick={() => setNav(false)} className="cursor-pointer p-3">
                <Link to="/">
                  <AiOutlineClose size={20} color="gray"  className="font-light"/>
                </Link>
              </div>
            </div>
            <ul className="pt-10">
              {links.map(({ id, link, url }) => (
                <li
                  key={id}
                  className={`p-4 hover:text-blue-600 duration-300 text-lg cursor-pointer ${
                    activeLink === url ? "text-blue-600" : ""
                  }`}
                >
                  {link === "Services" ? (
                    <Menu>
                      <MenuHandler>
                        <Button className="shadow-none bg-transparent text-black text-md  font-medium capitalize m-0 p-0 hover:shadow-none hover:text-blue-500">
                          {link}
                          <AiOutlineDown className="inline-block ml-2" />
                        </Button>
                      </MenuHandler>
                      <MenuList>
                        <Link to="/services">
                          <MenuItem color="lightBlue" ripple="light">
                            Services
                          </MenuItem>
                        </Link>
                        <Link to="/blog">
                          <MenuItem color="lightBlue" ripple="light">
                            Blog/News
                          </MenuItem>
                        </Link>
                      </MenuList>
                    </Menu>
                  ) : (
                    <Link to={url}>{link}</Link>
                  )}
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
