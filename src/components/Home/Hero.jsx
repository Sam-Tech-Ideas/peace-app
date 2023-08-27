import React, { useEffect } from "react";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/peaceful-d5db9.appspot.com/o/M2.JPG?alt=media&token=c6dcf635-cf06-4eec-9376-c55f52499bc8",
    "https://firebasestorage.googleapis.com/v0/b/peaceful-d5db9.appspot.com/o/M3.JPG?alt=media&token=a24e0957-7325-4633-91ce-df7610868476",
    "https://firebasestorage.googleapis.com/v0/b/peaceful-d5db9.appspot.com/o/M4.JPG?alt=media&token=68ccaa1a-f150-4737-9752-16e11748504c",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase the currentImageIndex by 1
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // Change the background image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <div
      className=" h-screen text-white transition-background-image"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentImage})`,
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
              EXPERIENCE THE SERVICES OF AN ENTERPRISE <br /> WITH PEACEFUL
              DREAM.
            </h1>
            <p className="sm:text-xl py-4 text-md ">
              For the sake of our service no customer will leave and decide not
              to return.
            </p>

            <div className="flex justify-center">
              <button className="bg-blue-500 hover:shadow-lg hover:bg-blue-600 text-white font-bold  px-4 py-1 sm:py-3 sm:px-8 rounded-md mx-4">
                Order Here
              </button>

              <button className="bg-transparent text-sm hover:shadow-sm hover:duration-700 hover:bg-opacity-30 hover:bg-[rgb(254,249,249)] hover:border-white text-white font-semibold hover:text-white sm:py-3 px-4 py-1 sm:px-8  border border-white hover:border-transparent rounded-md mx-2">
                Learn More
              </button>
            </div>
            <div className="flex justify-center mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
