import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import Iframe from 'react-iframe';
import { db } from '../../firebase/config';
import Loader from '../Loader';
import { useNavigate } from 'react-router-dom';

import  { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
 const navigate = useNavigate();



const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);


  try{
    setLoading(true);


    emailjs
      .sendForm(
        "service_ufpkdsv",
        "template_93iysw4",
        form.current,
        "pkNjH6apHSrzAWYkA"
      )
      .then(
        (result) => {
          setLoading(true);
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
    setLoading(false);
    navigate("/success");
  }catch(error){
    console.log(error);
    setLoading(false);

  }

  
};




//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    setLoading(true);

//    try {
//      const data = {
//        name,
//        email,
//        message,
//      };

//      // Submit data to Firestore
//      const docRef = await addDoc(collection(db, "messages"), data);
//      console.log("Document written with ID: ", docRef.id);

//      // Clear the form fields after successful submission
//      setName("");
//      setEmail("");
//      setMessage("");

//      setLoading(false);

//       // Redirect to success page
//       navigate("/success");

     
//    } catch (error) {
//      console.error("Error adding document: ", error);
//      setLoading(false);
//    }
//  };

 

   

  return (
    <div>
      <section class="text-primary body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8  md:mt-0">
            <div class=" mb-10">
              <div class=" py-3">
                <div class="w-16 h-1 rounded-full bg-primary inline-flex"></div>
              </div>
              <h1 class="sm:text-4xl text-3xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h1>
              <p class="leading-relaxed mb-5 text-primary">
                We are here to answer any questions you may have about our
                services. Reach out to us and we'll respond as soon as we can.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg flex "
                type="submit"
                value='Send'
              >
                {loading ? <Loader /> : null}
                <span className="px-2">Send message</span>
              </button>
            </form>
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

// export const ContactUs = () => {
  

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
