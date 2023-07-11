import React from "react";

const About = () => {
  return (
    <div className="py-24">
      <div class="text-center  mb-14">
        <div class="flex mt-6 justify-center py-3">
          <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
        </div>
        <h1 class="sm:text-4xl text-3xl font-bold text-blue-500 mb-4">
          About Us
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s px-10">
          We are a leading manufacturer of polythene bags and other packaging
          materials in Ghana. We have been in operation for over 20 years and we
          have a wide range of products to meet the needs of our customers.
        </p>
      </div>
      <div class="container  mx-auto md:px-6">
        <section class="">
          <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="flex flex-wrap items-center">
              <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Trendy Pants and Shoes"
                  class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div class="px-6 py-6 md:px-12">
                  <h2 class="mb-4 text-blue-500 text-2xl font-bold">
                    The Best Polythene Bags Manufacturer in Ghana
                  </h2>
                  <p class="mb-6 flex items-center font-bold uppercase text-blue-800 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="mr-2 h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                      />
                    </svg>
                    20 years of experience
                  </p>
                  <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                    As the leading polythene bags manufacturer in Ghana, we have
                    been in the business for over 20 years. We have a wide range
                    of products that are suitable for all your packaging needs.
                    Our products include: polythene bags, polythene sheets,
                    polythene rolls, polythene tubing, polythene shrink film,
                    polythene stretch film, polythene shrink hood, polythene
                    shrink tubing, polythene shrink bags, polythene shrink
                    sheets, polythene shrink covers, polythene shrink pallet
                    covers, polythene shrink pallet hoods, polythene shrink
                    pallet bags, polythene shrink pallet sheets, polythene and a
                    lot more.
                  </p>
                  <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                    We are also available to provide you with custom made
                    polythene bags and other products to suit your needs. We
                    have a team of experts who will work with you to ensure that
                    you get the best quality products at competitive prices. Our
                    goal is to make sure that our customers are satisfied with
                    their purchase every time they shop with us. If you have any
                    questions or concerns about our products, please feel free
                    to contact us anytime!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
