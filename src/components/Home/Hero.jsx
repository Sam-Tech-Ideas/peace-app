// import { Button } from "@material-tailwind/react";
// import React, { useState, useEffect } from "react";

// const images = [
//   "https://images.unsplash.com/photo-1687218209500-be09358e0072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

//   // Add more image URLs here
// ];

// const Hero = () => {
//   const [currentImage, setCurrentImage] = useState(images[0]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * images.length);
//       setCurrentImage(images[randomIndex]);
//     }, 5000); // Change the image every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="relative flex items-center justify-center h-[60vh] bg-cover bg-center sm:h-[70vh]"
//       style={{
//         backgroundImage: `url(${currentImage})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center ",
//       }}
//     >
//       <div className="absolute inset-0 bg-black opacity-60 "></div>
//       <div className="relative text-white">
//         <h1 className="text-4xl font-bold sm:texl-lg text-center ">
//           EXPERIENCE THE BEST SERVICES OF AN ENTERPRISE <br />{" "}
//           <span className="text-md font-thin italic">Like a </span>
//           PEACEFUL DREAM.
//         </h1>
//         <div className="flex-col justify-center flex items-center">
//           <p className="mt-4 text-center text-lg   mx-2">
//             For the sake of our service no customer will leave and decide not to
//             return.
//           </p>
//           <div className="my-2 ">
//             <Button className="bg-blue-500 text-white px-8 py-3 hover:shadow-none rounded-md hover:bg-blue-700 capitalize text-lg">
//               Order Now
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import img from "../../../src/assets/img.png";

const Hero = () => {
  return (
    <section class="  bg-indigo-900 w-full sm:w-full">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class=" sm:text-4xl text-3xl mb-4 font-bold text-white">
            EXPERIENCE THE BEST OF AN ENTERPRISE
            <br class="hidden lg:inline-block" />
            <span className="italic"> Like a </span> PEACEFUL DREAM
          </h1>
          <p class="mb-8 leading-relaxed text-white text-lg">
            For the sake of our service no customer will leave and decide not to
            return.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-green-900 bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Order Here
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded-3xl shadow-xl  shadow-gray-900"
            alt="hero"
            src={img}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
