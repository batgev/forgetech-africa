import React from "react";
import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 h-full w-full text-[$4b5563]"
      style={{
        background: "linear-gradient(135deg,#ffffff,#f7fbff 40%,#eef6ff 100%",
      }}
    >
      <div className="hidden md:flex w-full justify-center">
        <Header />
      </div>

      {/**main section */}
      <div className="flex-1 flex flex-col items-center gap-8  w-full">
        <div className="flex w-[80%] justify-around items-center text-[#111827] ">
          <div className="flex  flex-col ">
            <h2 className="text-[3rem] md:text-[4rem] text-cyan-950 font-sans">
              Our Services
            </h2>
            <span className="text-xl">
              We build modern digital experiences that help businesses grow.
            </span>
            <span className="">
              From landing pages to full-stack business websites,
              <br />
              we deliver fast, responsive and scalable solutions.
            </span>
          </div>
          <div>
            <img
              src="/assets/download.jpg"
              alt=""
              className="w-[320px] h-auto object-contain rounded-lg "
            />
          </div>
        </div>

        {/**cards */}
        <div className=" w-full  md:w-[80%] mt-[60px]">
          <div className="flex md:flex-row flex-col items-center gap-4 md:gap-2 md:justify-around  w-[100%]  text-xl md:text-[16px]">
            <div
              className={`flex flex-col items-center gap-2 rounded-md hover:translate-y-[5px] md:w-[250px] w-[90%] min-h-[220px] leading-loose text-white bg-cyan-800 transition-all duration-700 ease-out `}
            >
              <div className="flex flex-col gap-2 items-center p-2 md:p-0 md:pt-2 text-xl ">
                <FontAwesomeIcon
                  icon="fa-mobile-screen-button"
                  className="text-2xl"
                />
                <h3>Responsive Design</h3>
              </div>
              <hr className="h-0.5 w-full bg-white" />
              <span className="px-2">
                We develop mobile freindly
                <br />
                and fully responsive websites.
              </span>
            </div>
            <div
              className={`flex flex-col items-center rounded-md gap-2 md:w-[250px] w-[90%] min-h-[220px] hover:translate-y-[5px] text-white bg-cyan-800 leading-loose transition-all duration-700 ease-out `}
            >
              <div className="flex flex-col gap-2 items-center p-2 md:p-0 md:pt-2 text-xl">
                <FontAwesomeIcon
                  icon="fa-magnifying-glass"
                  className="text-2xl"
                />
                <h3>SEO Friendly</h3>
              </div>
              <hr className="h-0.5 w-full bg-white" />
              <span className="px-2">
                We help improve your sites
                <br /> visibility on search engines.
              </span>
            </div>
            <div
              className={`flex rounded-md items-center md:w-[250px] w-[90%] min-h-[220px] flex-col gap-2 hover:translate-y-[5px] text-white bg-cyan-800  leading-loose transition-all duration-700 ease-out `}
            >
              <div className="flex flex-col gap-2 items-center p-2 md:p-0 md:pt-2 text-xl">
                <FontAwesomeIcon
                  icon="fa-brands fa-wordpress"
                  className="text-2xl"
                />
                <h3>WordPress Dev</h3>
              </div>
              <hr className="h-0.5 w-full bg-white" />
              <span className="px-2">
                We create and customize <br /> expert wordpress sites.
              </span>
            </div>
            <div
              className={`flex flex-col items-center min-h-[220px] w-[90%] md:w-[250px] hover:translate-y-[5px] rounded-md text-white bg-cyan-800 gap-2 leading-loose transition-all duration-700 ease-out `}
            >
              <div className="flex flex-col gap-2 items-center p-2 md:p-0 md:pt-2 text-xl">
                <FontAwesomeIcon
                  icon="fa-screwdriver-wrench"
                  className="text-2xl"
                />
                <h3>Maintenance & Support</h3>
              </div>
              <hr className="h-0.5 w-full bg-white" />
              <span className="px-2">
                We provide ongoing updates <br /> and technical support.
              </span>
            </div>
          </div>
        </div>
        {/**why choose us section */}
        <div className="flex flex-col gap-6 w-[98vw] md:w-[80%] md:pl-8 bg-[#e8fbff] rounded-md">
          <h4 className="text-4xl ">Why Choose Us</h4>
          <ul className="text-2xl flex md:flex-row flex-col gap-4 justify-around">
            <li>
              <FontAwesomeIcon icon="fa-check-double" color="green" />
              Fast Delivery
            </li>
            <li>
              <FontAwesomeIcon icon="fa-check-double" color="green" />
              Affordable Pricing
            </li>
            <li>
              <FontAwesomeIcon icon="fa-check-double" color="green" />
              Ongoing Support
            </li>
            <li>
              <FontAwesomeIcon icon="fa-check-double" color="green" />
              SEO Optimization
            </li>
          </ul>
          <div className="flex justify-center mb-4 mt-4">
            <Link
              to="/hire"
              className="bg-cyan-800 text-white text-center rounded-md p-[14px]  w-[200px] animate-pulse"
            >
              Hire Us
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
