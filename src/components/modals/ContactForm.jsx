import { LuUser } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { LuSend } from "react-icons/lu";

//MEET THE TUTORS PAGE
//import { useState } from "react";
// import ContactForm from "./modals/ContactForm"
// const [ showContactForm, setShowContactForm ] = useState(false)
//on the Email button
// onClick={() => setShowContactForm(true)}
//on the bottom of the page inside the return
// {showContactForm && (
//   <ContactForm setShowContactForm={setShowContactForm} />

const ContactForm = ({ setShowContactForm }) => {
  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="roboto-contact relative w-full max-w-lg max-h-full bg-slate-800 px-6 py-6 border-2 border-[#D6A60D] rounded-lg">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg shadow-sm">
            {/* <!-- Modal header --> */}
            <h2 className="mb-1 text-xl font-bold text-yellow-400">
              Send a Message
            </h2>
            <p className="mb-3 lg:mb-6 font-normal text-[#C8C9C2] sm:text-sm text-lg tracking-wide">
              Send a message for questions, scheduling, or course information.
            </p>
            {/* <!-- Modal body --> */}
            <div>
              <form className="space-y-5" action="#">
                <div>
                  <div className="flex text-[#C8C9C2]">
                    <div className="">
                      <LuUser size={15} />
                    </div>
                    <label
                      htmlFor="name"
                      className="block ml-2 mb-1 text-sm font-medium"
                    >
                      Your Name *
                    </label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="required shadow-sm bg-slate-700 border border-gray-500 text-slate-50 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <div className="flex text-[#C8C9C2]">
                    <div className="">
                      <LuMail size={15} />
                    </div>
                    <label
                      htmlFor="email"
                      className="block mb-1 ml-2 text-sm font-medium"
                    >
                      Email Address *
                    </label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="required shadow-sm bg-slate-700 border border-gray-500 text-slate-50 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <div className="flex text-[#C8C9C2]">
                    <div className="">
                      <LuMessageSquare size={15} />
                    </div>
                    <label
                      htmlFor="message"
                      className="block mb-1 ml-2 text-sm font-medium"
                    >
                      Message *
                    </label>
                  </div>
                  <textarea
                    id="message"
                    rows="6"
                    className="required shadow-sm bg-slate-700 border border-gray-500 text-slate-50 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="Send us a message..."
                  ></textarea>
                </div>

                <button
                  onClick={() => {
                    setShowContactForm(false);
                  }}
                  type="submit"
                  className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                >
                  <LuSend className="inline mr-4 text-black" />
                  Send Message
                </button>
                <div className="text-sm font-medium text-[#909DA9]">
                  * All fields are required. You will receive a response within
                  24 hours.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
