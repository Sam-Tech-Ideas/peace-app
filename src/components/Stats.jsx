import React from 'react'

const Stats = () => {
  return (
    <div>
      <section class="text-gray-600 body-font" data-aos="fade-up">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              With Over 2 Million Customers Around The Globe
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              PeacefulDreament is a global online marketplace, where people come
              together to make, sell, buy, and collect unique items.
            </p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="zoom-in-up">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/**Icon */}
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  200k+
                </h2>
                <p class="leading-relaxed">Products</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="zoom-in-up">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/**Icon */}
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  2M+
                </h2>
                <p class="leading-relaxed">Customers</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="zoom-in-up">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/**Icon */}
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  74
                </h2>
                <p class="leading-relaxed">
                  Countries
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="zoom-in-up">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/**Icon */}
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  146+
                </h2>
                <p class="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stats