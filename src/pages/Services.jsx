import React from "react";
import wave from ".././assets/wave.svg";
import { FaHandHolding } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";


const Services = () => {
  return (
    <div>
      <section class="mb-40 ">
        <div
          class="relative overflow-hidden bg-cover bg-no-repeat "
          style={{
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
            height: "40vh",
            backgroundPosition: "50%",
          }}
        >
          <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div class="flex h-full items-center justify-center">
              <div class="px-6 text-center text-white md:px-12">
                <h1 class=" text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl py-2">
                  OUR SERVICES
                </h1>
                <p>We are a leading manufacturer of polythene bags in Ghana.</p>
              </div>
            </div>
          </div>
        </div>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                The Best Polythene Bags Manufacturer in Ghana
              </h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                As the leading polythene bags manufacturer in Ghana, we have
                been in the business for over 20 years. We have a wide range of
                products that are suitable for all your packaging needs. Our
                products include: polythene bags, polythene sheets, polythene
                rolls, polythene tubing, polythene shrink film, polythene
              </p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-5 flex-shrink-0">
                  <FaHandHolding size={40} className="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Quality Products
                  </h2>
                  <p class="leading-relaxed text-base">
                    From our factory in Accra, we produce high quality polythene
                    bags and other packaging materials for the Ghanaian market.
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-5 flex-shrink-0">
                  <BiWallet size={40} className="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Affordable
                  </h2>
                  <p class="leading-relaxed text-base">
                    We offer competitive prices on all our products. Our
                    customers can also enjoy discounts when they buy in bulk.
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-5 flex-shrink-0">
                  <CiDeliveryTruck size={40} className="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Fast Delivery
                  </h2>
                  <p class="leading-relaxed text-base">
                    We have a fleet of trucks that deliver our products to
                    customers all over Ghana. We also have a network of
                    distributors who help us reach more customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Services;
