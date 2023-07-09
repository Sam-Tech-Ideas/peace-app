import React from 'react'
import { FaEnvelope, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-300 body-font bg-gray-800 flex justify-center items-center">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-300 tracking-widest text-lg mb-3">
                Contact
              </h2>
              <nav class="list-none mb-10">
                <li className='py-2'>
                  <a class="text-gray-300">
                    Phone:{" "}
                  </a>
                  <a class="text-gray-300 hover:text-gray-800">233559911251</a>
                </li>
                <li className='py-2'>
                  <a class="text-gray-300 hover:text-blue-500 hover:cursor-pointer">
                    Location:{" "}
                  </a>
                  <a class="text-gray-300 hover:text-gray-800">Accra, Ghana</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-300  text-xl mb-3">
                Quick Links
              </h2>
              <nav class="list-none mb-10">
                <li className="py-2">
                  <a class="text-gray-300 hover:underline hover:cursor-pointer">
                    Home
                  </a>
                </li>
                <li className="py-2">
                  <a class="text-gray-300 hover:underline hover:cursor-pointer">
                    About Us
                  </a>
                </li>
                <li className="py-2">
                  <a class="text-gray-300 hover:underline hover:cursor-pointer">
                    Services
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-300  text-xl mb-3 ">
                Follow Us On
              </h2>
              <nav class="list-none mb-10">
                <nav class="list-none mb-10 flex ">
                  <div className="hover:bg-red-500  p-2 rounded-full bg-gray-700 mr-4 duration-300">
                    <FaFacebookF size={15} className="" />
                  </div>
                  <li className="hover:bg-red-500  p-2 rounded-full bg-gray-700 mr-4 duration-300">
                    <FaInstagram size={15} className="" />
                  </li>
                  <li className="hover:bg-red-500  p-2 rounded-full bg-gray-700 mr-4 duration-300">
                    <FaLinkedin size={15} className="" />
                  </li>
                </nav>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}import Iframe from 'react-iframe'
<Iframe url="https://www.sdrive.app/embed/1ptBQD"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>

export default Footer

