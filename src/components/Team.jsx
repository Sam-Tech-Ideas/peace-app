import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {

  const members = [
    {
      name: "EUNICE BAAFI",
      position: "CHIEF EXECUTIVE OFFICER (PLASTICS)",
      image:
        "https://images.unsplash.com/photo-1688378911966-ff12184b2680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "LEWIS BAAFI",
      position: "PRESIDENT & MARKETING DIRECTOR",
      image:
        "https://images.unsplash.com/photo-1688378911966-ff12184b2680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },

    {
      name: "STEPHEN BAAFI",
      position: "CHIEF EXECUTIVE DIRECTOR (B. Hardware)",
      image:
        "https://images.unsplash.com/photo-1688378911966-ff12184b2680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },

    {

      name: "JESSICA BAAFI",
      position: "VICE PRESIDENT",
      image:
        "https://images.unsplash.com/photo-1688378911966-ff12184b2680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },

    {
      name: "MAGRET",
      position: "MANAGING DIRECTOR RETAIL & WHOLESALE",
      image:
        "https://images.unsplash.com/photo-1688378911966-ff12184b2680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },

   

  ];


  return (
    <div>
      <section class="text-primary body-font">
        <div class="container px-5 py-24 mx-auto sm:my-24">
          <div class="text-center mb-10">
            <div class="flex mt-6 justify-center py-3">
              <div class="w-16 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
            <h1 class="sm:text-4xl text-3xl font-bold text-primary mb-4">
              Our Team
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-primarys">
              Meet the team behind the success of our prestigious company.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">

            {
              members.map((member) => (
                <div class="p-4 lg:w-1/6 md:w-1/2">
                  <div class="h-full flex flex-col items-center text-center">
                    <div class="relative">
                      <img
                        alt="team"
                        class="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                        src={member.image}
                      />
                      <div className="">
                        <div class="absolute bottom-0 h-10 left-0 right-0  py-4   flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity  hover:duration-300 ">
                          <div class="flex space
                          -x-4 bg-white border-2 border-blue-500 py-3 rounded-full px-14">
                            <a href="#" class="text-white">
                              <FaFacebook color="blue" />
                            </a>
                            <a href="#" class="text-white">
                              <FaTwitter color="blue" />
                            </a>
                            <a href="#" class="text-white">
                              <FaInstagram color="red" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full py-2">
                      <h2 class="title-font
                      font-medium text-lg text-primary">
                        {member.name}
                      </h2>
                      <h3 class="text-primary mb-3">
                        {member.position}
                      </h3>
                    </div>
                  </div>
                </div>
              ))

            }
           
          
          </div>
          
        
        </div>
      </section>
    </div>
  );
};

export default Team;
