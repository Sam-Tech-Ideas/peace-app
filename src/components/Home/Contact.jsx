import React from 'react'
import Iframe from 'react-iframe';

const Contact = () => {
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8  md:mt-0">
            

            <div class=" mb-10">
              <div class=" py-3">
                <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
              </div>
              <h1 class="sm:text-4xl text-3xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h1>
              <p class="leading-relaxed mb-5 text-gray-600">
                We are here to answer any questions you may have about our
                services. Reach out to us and we'll respond as soon as we can.
              </p>
             
            </div>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Send message
            </button>
            <p class="text-xs text-gray-500 mt-3"></p>
          </div>
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:ml-10  w-full">
            <Iframe
              width="100%"
              height="100%"
            
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact