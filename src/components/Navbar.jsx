// import React from "react";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Chip,
// } from "@material-tailwind/react";
// import {
//   ChevronDownIcon,
//   UserCircleIcon,
//   CubeTransparentIcon,
//   Bars3Icon,
//   XMarkIcon,
//   FlagIcon,
//   ChatBubbleOvalLeftIcon,
//   UsersIcon,
//   FolderIcon,
//   Square3Stack3DIcon,
//   RocketLaunchIcon,
//   FaceSmileIcon,
//   PuzzlePieceIcon,
//   GiftIcon,
// } from "@heroicons/react/24/outline";

// const colors = {
//   blue: "bg-blue-50 text-blue-500",
//   orange: "bg-orange-50 text-orange-500",
//   green: "bg-green-50 text-green-500",
//   "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
//   purple: "bg-purple-50 text-purple-500",
//   teal: "bg-teal-50 text-teal-500",
//   cyan: "bg-cyan-50 text-cyan-500",
//   pink: "bg-pink-50 text-pink-500",
// };

// const navListMenuItems = [
//   {
//     color: "purple",
//     icon: RocketLaunchIcon,
//     title: "Products",
//     description: "Checkout our products that our customers order.",
//   },
//   {
//     color: "teal",
//     icon: FaceSmileIcon,
//     title: "Customers",
//     description: "Checkout our products that our customers order .",
//   },
//   {
//     color: "pink",
//     icon: PuzzlePieceIcon,
//     title: "Features",
//     description: "Checkout our products that our customers order.",
//   },
// ];

// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

//   const renderItems = navListMenuItems.map(
//     ({ icon, title, description, color }, key) => (
//       <a href="#" key={key}>
//         <MenuItem className="flex items-center gap-3 rounded-lg">
//           <div className={`rounded-lg p-5 ${colors[color]}`}>
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               className: "h-6 w-6",
//             })}
//           </div>
//           <div>
//             <Typography
//               variant="h6"
//               color="blue-gray"
//               className="flex items-center text-sm"
//             >
//               {title}
//             </Typography>
//             <Typography variant="small" color="gray" className="font-normal">
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </a>
//     )
//   );

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-normal">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Brand
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />

//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
//         </MenuList>
//       </Menu>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-normal">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Services
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   );
// }

// function NavList() {
//   return (
//     <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-normal"
//       ></Typography>
//       <NavListMenu />
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-normal"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4">
//           About us
//         </ListItem>
//       </Typography>
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-normal"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
//       </Typography>
//     </List>
//   );
// }

// export default function Example() {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   return (
//     <div className="">
//       <Navbar className="mx-auto  px-8 py-4 w-full   min-w-full ">
//         <div className="flex items-center justify-between text-blue-gray-900">
//           <Typography
//             as="a"
//             href="#"
//             variant="h6"
//             className="mr-4 cursor-pointer py-1.5 lg:ml-2"
//           >
//             Logo
//           </Typography>
//           <div className="hidden lg:block">
//             <NavList />
//           </div>
//           <div className="hidden gap-2 lg:flex">
//             {/* <Button variant="text" size="sm" color="blue-gray">
//               Order Here
//             </Button> */}
//             <Button className="bg-blue-500 text-white px-8 py-3 hover:shadow-none rounded-md hover:bg-blue-700 capitalize text-lg">
//               Contact Us
//             </Button>
//           </div>
//           <IconButton
//             variant="text"
//             color="blue-gray"
//             className="lg:hidden"
//             onClick={() => setOpenNav(!openNav)}
//           >
//             {openNav ? (
//               <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//             ) : (
//               <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//             )}
//           </IconButton>
//         </div>
//         <Collapse open={openNav}>
//           <NavList />
//           <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
//             <Button
//               className="bg-blue-500 text-white px-8 py-3 hover:shadow-none rounded-md hover:bg-blue-700 capitalize text-lg"
//               fullWidth
//             >
//               Contact Us
//             </Button>
//           </div>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

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
          <div className="flex items-center   py-12">
            <img src={img} alt="" height="" width="" className="h-20 w-20" />
          </div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="p-4 hover:text-blue-600 duration-300 text-xl cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
          <div className="hidden md:flex mr-[126px]">
            <a
              href=""
              className=" hover:text-white px-6   bg-blue-600 py-2 rounded hover:bg-blue-700"
              target="_blank"
            >
              Contact Us
            </a>
          </div>

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
            <div>
              <a
                href=""
                target="_blank"
                className="bg-blue-600 w-full ml-3 rounded-md hover:bg-blue-800 px-4 py-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
