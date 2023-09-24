// import React from 'react'

// const Services = () => {
//   return (
//     <div>
//       <section class="text-gray-600 body-font">
//         <div class="container px-14 py-3 mx-auto mb-8">
//           <div class="flex flex-col text-center w-full mb-20">
//             <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-900">
//               Why Choose Us?
//             </h1>
//           </div>
//           <div class="flex flex-wrap -m-4">
//             <div class="p-4 md:w-1/4">
//               <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
//                 <div class="flex items-center mb-3">
//                   <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
//                     <svg
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       class="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//                     </svg>
//                   </div>
//                   <h2 class="text-gray-900 text-lg title-font font-medium">
//                     Easy booking
//                   </h2>
//                 </div>
//                 <div class="flex-grow">
//                   <p class="leading-relaxed text-base">
//                     Make a reservation easily on our platform with just few
//                     clicks
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="p-4 md:w-1/4">
//               <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
//                 <div class="flex items-center mb-3">
//                   <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
//                     <svg
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       class="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//                       <circle cx="12" cy="7" r="4"></circle>
//                     </svg>
//                   </div>
//                   <h2 class="text-gray-900 text-lg title-font font-medium">
//                     High Security
//                   </h2>
//                 </div>
//                 <div class="flex-grow">
//                   <p class="leading-relaxed text-base">
//                     We provide high security to our customers on bookings
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="p-4 md:w-1/4">
//               <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
//                 <div class="flex items-center mb-3">
//                   <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
//                     <svg
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       class="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle cx="6" cy="6" r="3"></circle>
//                       <circle cx="6" cy="18" r="3"></circle>
//                       <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
//                     </svg>
//                   </div>
//                   <h2 class="text-gray-900 text-lg title-font font-medium">
//                     Reliable
//                   </h2>
//                 </div>
//                 <div class="flex-grow">
//                   <p class="leading-relaxed text-base">
//                     Always assured of providing your reservation on time
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="p-4 md:w-1/4">
//               <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
//                 <div class="flex items-center mb-3">
//                   <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
//                     <svg
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       class="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle cx="6" cy="6" r="3"></circle>
//                       <circle cx="6" cy="18" r="3"></circle>
//                       <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
//                     </svg>
//                   </div>
//                   <h2 class="text-gray-900 text-lg title-font font-medium">
//                     Reliable
//                   </h2>
//                 </div>
//                 <div class="flex-grow">
//                   <p class="leading-relaxed text-base">
//                     Always assured of providing your reservation on time
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Services

import React from "react";
import {
  FaAccessibleIcon,
  FaHeadphonesAlt,
  FaMicrophoneAlt,
  FaMicrophoneSlash,
  FaRegHandLizard,
  FaSteamSquare,
  FaStrava,
} from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <div className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 sm:my-24">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {/*  <span className="relative inline-block">
           <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{" "} */}
            Why Choose Us?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            We provide the best services to our customers and we are always ready to serve you with the best.
          </p>
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
              <p className="mb-3 text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear.
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">When has justice</h6>
              <p className="mb-3 text-sm text-gray-900">
                Rough pomfret lemon shark plownose chimaera southern sandfish
                kokanee northern sea.
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
              <p className="mb-3 text-sm text-gray-900">
                A slice of heaven. O for awesome, this chocka full cuzzie is as
                rip-off as a cracker.
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                A slice of heaven
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling.
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* <section class="text-primary body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-10">
            <div class="flex mt-6 justify-center py-3">
              <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
            <h1 class="sm:text-4xl text-3xl font-bold text-primary mb-4">
              Our Services
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-primary">
              We provide the best services to our customers and we are always
              ready to serve you with the best.
            </p>
          </div>
          <div class="container px-5  mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="h-full  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-64 md:h-36 w-full object-cover object-center"
                    src="https://firebasestorage.googleapis.com/v0/b/peaceful-d5db9.appspot.com/o/M4.JPG?alt=media&token=68ccaa1a-f150-4737-9752-16e11748504c"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h1 class="title-font text-lg font-medium text-primary mb-3">
                      The Market place delivery
                    </h1>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-64 md:h-36 w-full object-cover object-center"
                    src="https://firebasestorage.googleapis.com/v0/b/peaceful-d5db9.appspot.com/o/Main.JPEG?alt=media&token=d009b85d-bf8c-4e62-b34a-c1266128607c"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      The Market Place Delivery
                    </h1>

                    <div class="flex items-center flex-wrap"></div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-64 md:h-36 w-full object-cover object-center"
                    src="
https://firebasestorage.googleapis.com/v0/b/peaceful-d5db9.appspot.com/o/M3.JPG?alt=media&token=a24e0957-7325-4633-91ce-df7610868476"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      The Market Place Delivery
                    </h1>

                    <div class="flex items-center flex-wrap "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center hover:scale-90">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-blue-500 mb-5 flex-shrink-0">
                <FaHeadphonesAlt size={60} />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-xl title-font font-medium mb-3">
                  24/7 Support
                </h2>
                <p class="leading-relaxed text-base text-center">
                  We are always available to serve you with the best services.
                </p>
              </div>
            </div>

            <div class="p-4 md:w-1/3 flex flex-col text-center items-center hover:scale-90">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-blue-500 mb-5 flex-shrink-0">
                <FaHeadphonesAlt size={60} />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-xl title-font font-medium mb-3">
                  24/7 Support
                </h2>
                <p class="leading-relaxed text-base text-center">
                  We are always available to serve you with the best services.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center hover:scale-90">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-blue-500 mb-5 flex-shrink-0">
                <FaAccessibleIcon size={60} />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Reliability
                </h2>
                <p class="leading-relaxed text-base text-center">
                  Always assured of providing your reservation on time.
                </p>
              </div>
            </div>
          </div> 
        </div>
      </section> */}
    </div>
  );
};

export default Services;

// <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap w-full mb-20">
//       <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
//         <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
//           Pitchfork Kickstarter Taxidermy
//         </h1>
//         <div class="h-1 w-20 bg-indigo-500 rounded"></div>
//       </div>
//       <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
//         Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
//         gentrify, subway tile poke farm-to-table. Franzen you probably haven't
//         heard of them man bun deep jianbing selfies heirloom prism food truck
//         ugh squid celiac humblebrag.
//       </p>
//     </div>
//     <div class="flex flex-wrap -m-4">
//       <div class="xl:w-1/3 md:w-1/2 p-4">
//         <div class="bg-gray-100 p-6 rounded-lg">
//           <img
//             class="h-40 rounded w-full object-cover object-center mb-6"
//             src="https://dummyimage.com/720x400"
//             alt="content"
//           />
//           <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
//             SUBTITLE
//           </h3>
//           <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
//             Chichen Itza
//           </h2>
//           <p class="leading-relaxed text-base">
//             Fingerstache flexitarian street art 8-bit waistcoat. Distillery
//             hexagon disrupt edison bulbche.
//           </p>
//         </div>
//       </div>
//       <div class="xl:w-1/3 md:w-1/2 p-4">
//         <div class="bg-gray-100 p-6 rounded-lg">
//           <img
//             class="h-40 rounded w-full object-cover object-center mb-6"
//             src="https://dummyimage.com/721x401"
//             alt="content"
//           />
//           <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
//             SUBTITLE
//           </h3>
//           <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
//             Colosseum Roma
//           </h2>
//           <p class="leading-relaxed text-base">
//             Fingerstache flexitarian street art 8-bit waistcoat. Distillery
//             hexagon disrupt edison bulbche.
//           </p>
//         </div>
//       </div>
//       <div class="xl:w-1/3 md:w-1/2 p-4">
//         <div class="bg-gray-100 p-6 rounded-lg">
//           <img
//             class="h-40 rounded w-full object-cover object-center mb-6"
//             src="https://dummyimage.com/722x402"
//             alt="content"
//           />
//           <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
//             SUBTITLE
//           </h3>
//           <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
//             Great Pyramid of Giza
//           </h2>
//           <p class="leading-relaxed text-base">
//             Fingerstache flexitarian street art 8-bit waistcoat. Distillery
//             hexagon disrupt edison bulbche.
//           </p>
//         </div>
//       </div>
//       <div class="xl:w-1/3 md:w-1/2 p-4">
//         <div class="bg-gray-100 p-6 rounded-lg">
//           <img
//             class="h-40 rounded w-full object-cover object-center mb-6"
//             src="https://dummyimage.com/723x403"
//             alt="content"
//           />
//           <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
//             SUBTITLE
//           </h3>
//           <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
//             San Francisco
//           </h2>
//           <p class="leading-relaxed text-base">
//             Fingerstache flexitarian street art 8-bit waistcoat. Distillery
//             hexagon disrupt edison bulbche.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>;
