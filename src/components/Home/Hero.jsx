import React from "react";
import img from "../../assets/back.jpg";

function Hero() {
  return (
    <div
      className=" h-screen text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://firebasestorage.googleapis.com/v0/b/fdsproject-430e7.appspot.com/o/imagesPersoal%2Fback.jpg?alt=media&token=4b7c030b-c96d-42aa-a38c-30bcaddb50c9)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="container mx-auto flex px-5  items-center justify-center flex-col">
        <div className="flex justify-center items-center h-screen">
          <div className="text-center  w-full">
            <h1 className="sm:text-5xl text-3xl font-bold leading-tight ">
               EXPERIENCE  THE SRVICES OF AN ENTERPRISE <br /> WITH  PEACEFUL DREAM.
            </h1>
            <p className="sm:text-xl py-4 text-md ">
               For the sake of our service no customer will leave and decide not to return. 
               
            </p>

            <div className="flex justify-center">
              <button className="bg-blue-500 hover:shadow-lg hover:bg-blue-600 text-white font-bold  px-4 py-1 sm:py-3 sm:px-8 rounded-md mx-4">
                Order Here
                </button>

              <button className="bg-transparent text-sm hover:shadow-sm hover:duration-700 hover:bg-opacity-30 hover:bg-[rgb(254,249,249)] hover:border-white text-white font-semibold hover:text-white sm:py-3 px-4 py-1 sm:px-8  border border-white hover:border-transparent rounded-md mx-2">
                Learn More
                </button>
                
            </div>
            <div className="flex justify-center mx-auto">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
