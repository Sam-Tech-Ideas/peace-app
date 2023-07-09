import React from "react";
import { FaFile, FaFileAlt, FaPercent, FaPersonBooth } from "react-icons/fa";
 import {AiOutlineUsergroupAdd, AiOutlineUsergroupDelete} from "react-icons/ai";
const Stat = () => {
  return (
    <div
      className=" flex justify-center items-center flex-col"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 256, 0.2), rgba(0, 0, 0, 0.5)), url(https://firebasestorage.googleapis.com/v0/b/fdsproject-430e7.appspot.com/o/imagesPersoal%2Fback.jpg?alt=media&token=4b7c030b-c96d-42aa-a38c-30bcaddb50c9)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "40vh",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="flex justify-center items-center w-full pl-24 pb-8">
        <div class="flex-col sm:flex-row sm:justify-around w-full sm:flex items-center">
          <div class="py-8">
            <div>
              <AiOutlineUsergroupAdd size={65} color="white" className="my-8" />
              <h1>
                <p class="text-white text-4xl font-bold pb-2">100</p>
                <p className="text-white">Customers</p>
              </h1>
            </div>
          </div>
          <div>
            <div>
              <AiOutlineUsergroupAdd size={65} color="white" className="my-8" />
              <h1>
                <p class="text-white text-4xl font-bold pb-2">100</p>
                <p className="text-white">Customers</p>
              </h1>
            </div>
          </div>
        </div>
        <div class="flex-col sm:flex-row sm:justify-around w-full sm:flex items-center">
          <div class="py-8">
            <div>
              <AiOutlineUsergroupAdd size={65} color="white" className="my-8 " />
              <h1>
                <p class="text-white text-4xl font-bold pb-2">100</p>
                <p className="text-white">Customers</p>
              </h1>
            </div>
          </div>
          <div>
            <div>
              <AiOutlineUsergroupAdd size={65} color="white" className="my-8" />
              <h1>
                <p class="text-white text-4xl font-bold pb-2">100</p>
                <p className="text-white">Customers</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
