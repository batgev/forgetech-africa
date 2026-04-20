import React from "react";
import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer";
const ContactPage = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 h-full  w-full text-[$4b5563]"
      style={{
        background: "linear-gradient(135deg,#ffffff,#f7fbff 40%,#eef6ff 100%",
      }}
    >
      <div className="hidden md:flex w-full justify-center">
        <Header />
      </div>
      <div className="flex-1 flex flex-col  gap-4 items-center w-full">
        <div className=" flex flex-col md:items-start md:w-[80%] pl-2 md:pl-0 text-center">
          <span className="text-[3rem]">Contact Us</span>
          <span className="text-[2rem]">
            Let's talk about your next project.
          </span>
          <span>Have questions or need a custom solution?</span>
          <span>Reach out and we'll respond as soon as possible.</span>
        </div>
        <div
          className="flex md:flex-row flex-col md:items-center md:justify-evenly md:gap-8 pb-8 bg-white rounded-lg w-[95%] md:w-[80%] px-2"
          style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
        >
          <form className="flex flex-col gap-4  text-cyan-800 md:w-[400px] w-[90%]  rounded-md p-2">
            <div className="text-center">
              <h3 className="text-2xl underline ">Contact Details</h3>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                placeholder="fullname"
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="emial"
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="tel">Phone Number</label>
              <input
                type="tel"
                id="tel"
                placeholder="+233 000 000 000"
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="business-name">Subject</label>
              <input
                type="text"
                placeholder="Project request"
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="project-description">Message</label>
              <textarea
                name="project-description"
                id="project-description"
                placeholder="provide a brief description of your project.."
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
              ></textarea>
            </div>
            <div className="w-full flex justify-center">
              <button className="bg-cyan-800 text-white font-bold outline-none py-4 rounded-md w-[80%] px-2 md:px-0 md:w-[80%]">
                Send Message
              </button>
            </div>
          </form>
          <div className="md:pl-[40px]">
            <ul className="text-2xl flex  flex-col gap-4 justify-evenly md:justify-normal h-full">
              <li>
                <FontAwesomeIcon icon="fa-phone" color="green" />
                +233 599 931 520
              </li>
              <li>
                <FontAwesomeIcon icon="fa-location" color="green" />
                Accra, Mon - Fri
              </li>
              <li>
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" color="green" />
                [+233599931520]
              </li>
              <li>
                <FontAwesomeIcon icon="fa-envelope" color="green" />
                forgetechafrica@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
