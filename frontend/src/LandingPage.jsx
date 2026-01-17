import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
//This is going to be the landing page for the team-G project; should contain info about the team, display participants roles and contact info, and a contact us section for collaboration and contact us. The page should have a modern look and be responsive to every decvice.
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";
import Footer from "./Footer";

library.add(fas, far, fab);
const LandingPage = () => {
  const [toggleView, setToggleView] = useState(false);

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: contributorsRef, inView: contributorsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: blogpostsRef, inView: blogpostsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      id="top"
      className="flex flex-col items-center justify-between w-full h-[100%] text-white 
   relative z-0"
    >
      {/*header section */}
      <div className="flex justify-end  md:mr-4  w-[100%]  md:mt-4">
        <ul className="md:flex gap-4 hidden font-bold mr-8 ">
          <li className="bg-white text-black p-1 outline-none">
            <a href="#">About Us</a>
          </li>
          <li className="bg-white text-black p-1 outline-none">
            <a href="#contributors">Contributors</a>
          </li>
          <li className="bg-white text-black px-2 py-1 outline-none">
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <FontAwesomeIcon
          icon="fa-bars"
          color="white"
          className="md:hidden text-xl relative z-0"
          onClick={() => setToggleView(true)}
        />
        {/* mobile sidebar */}
        <div
          className={`${
            toggleView ? "flex" : "hidden"
          } w-[100vw] absolute z-10 bg-slate-800 h-[100%] pr-2 pt-2`}
        >
          <ul className="flex flex-col items-end gap-4 w-[100%]  font-bold  ">
            <FontAwesomeIcon
              icon="fa-close"
              onClick={() => setToggleView(false)}
            />
            <li className="text-2xl">
              <a href="#about" onClick={()=>setToggleView(false)}>Back To Top</a>
            </li>
            <li className="text-2xl">
              <a href="#contributors" onClick={()=>setToggleView(false)}>Contributors</a>
            </li>
            <li className="text-2xl">
              <a href="#blog" onClick={()=>setToggleView(false)}>Blog</a>
            </li>
          </ul>
        </div>
      </div>

      {/*main section */}
      <div className="w-[90%] flex flex-col items-center gap-4 relative z-0 ">
        <div className="">
          <div className={`flex flex-col items-center `}>
            <img src="assets/logo.png" alt="" className="w-24 rounded-full" />
            <h2 className="md:text-4xl text-xl">ForgeTech-Africa</h2>
            <span className="tracking-[8px]  ">You dream we build!</span>
          </div>
          <div
            className={`w-[100%] flex  justify-center  flex-wrap gap-8 md:gap-4 p-2 md:mt-4 `}
          >
            <div
              className={`flex flex-col  gap-4 bg-slate-800 w-[90vw] md:w-[250px] text-xl md:text-[16px] h-[150px] shadow-sm shadow-slate-500 rounded-sm text-center transition-all duration-700 ease-out`}
            >
              <div className="flex items-center justify-center gap-2 bg-white text-black w-[100%] p-3 text-center">
                <FontAwesomeIcon icon="fa-code" />
                <h2>Custom Websites</h2>
              </div>
              <span>
                Bespoke websites tailored <br />
                to your needs
              </span>
            </div>
            <div
              className={`flex flex-col gap-4 bg-slate-800 w-[90vw] md:w-[250px] text-xl md:text-[16px] h-[150px] shadow-sm shadow-slate-500 rounded-sm text-center transition-all duration-700 ease-out`}
            >
              <div className="flex justify-center items-center gap-2 bg-white text-black w-[100%] p-3 text-center">
                <FontAwesomeIcon icon="fa-cart-shopping" />
                <h2>E-Commerce Solutions</h2>
              </div>
              <span>
                Powerful online stores <br />
                to boost your sales
              </span>
            </div>
            <div
              className={`flex flex-col gap-4 text-center bg-slate-800 w-[90vw] text-xl md:text-[16px] md:w-[250px] h-[150px]  shadow-sm shadow-slate-500 rounded-sm transition-all duration-700 ease-out`}
            >
              <div className="flex justify-center items-center gap-2 bg-white text-black w-[100%] p-3 text-center">
                <FontAwesomeIcon icon="fa-desktop" />
                <h2>Web Applications</h2>
              </div>
              <span>
                Advanced web applications
                <br />
                for your business
              </span>
            </div>
          </div>
        </div>
        {/*services section */}
        <div
          ref={servicesRef}
          className={`flex flex-col items-center  w-[100%] mt-8  gap-4 transition-all duration-1000 ease-out ${
            servicesInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-xl font-bold transition-all duration-700 ease-out `}
          >
            Our Services
          </h2>
          <div className="flex justify-center flex-wrap gap-8 w-[100%] text-xl md:text-[16px]">
            <div
              className={`flex flex-col gap-2  md:min-w-[200px] leading-loose transition-all duration-700 ease-out `}
            >
              <div className="flex flex-col gap-2 items-center p-2 text-xl ">
                <FontAwesomeIcon
                  icon="fa-mobile-screen-button"
                  className="text-2xl"
                />
                <h3>Responsive Design</h3>
              </div>
              <hr />
              <span>
                We develop mobile freindly
                <br />
                and fully responsive websites
              </span>
            </div>
            <div
              className={`flex flex-col gap-2  leading-loose transition-all duration-700 ease-out `}
            >
              <div className="flex flex-col gap-2 items-center p-2 text-xl">
                <FontAwesomeIcon
                  icon="fa-magnifying-glass"
                  className="text-2xl"
                />
                <h3>SEO Friendly</h3>
              </div>
              <hr />
              <span>
                We help improve your sites
                <br /> visibility on search engines
              </span>
            </div>
            <div
              className={`flex flex-col gap-2  leading-loose transition-all duration-700 ease-out `}
            >
              <div className="flex flex-col gap-2 items-center p-2 text-xl">
                <FontAwesomeIcon
                  icon="fa-brands fa-wordpress"
                  className="text-2xl"
                />
                <h3>WordPress Dev</h3>
              </div>
              <hr />
              <span className="">
                We create and customize <br /> expert wordpress sites
              </span>
            </div>
            <div
              className={`flex flex-col gap-2 leading-loose transition-all duration-700 ease-out `}
            >
              <div className="flex flex-col gap-2 items-center p-2 text-xl">
                <FontAwesomeIcon
                  icon="fa-screwdriver-wrench"
                  className="text-2xl"
                />
                <h3>Maintenance & Support</h3>
              </div>
              <hr />
              <span className="">
                We provide ongoing updates <br /> and technical support
              </span>
            </div>
          </div>
        </div>

        {/*contact us section */}
        <div
          ref={contactRef}
          className={`flex flex-col items-center gap-2 p-2 md:p-8 bg-white text-black w-[98.5vw] leading-loose border-2 border-slate-900 mt-8 transition-all duration-1000 ease-out ${
            contactInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl ">Let's Build Your Website Today!</h2>
          <span>
            Contact us to discuss your projects and get started with a free
            consultation.
          </span>
          <button className="bg-slate-900 px-2 py-2 text-white font-bold w-44 rounded-md shadow ">
            <a href="#contact-us">Contact Us</a>
          </button>
        </div>
        {/*team projects */}
        <div className="flex flex-col items-center md:gap-2">
          <h2 className="font-bold text-xl">See Our Latest Projects</h2>
          <FontAwesomeIcon icon="fa-arrow-down" className="animate-pulse" />
          {/*project showcase section*/}
          <div
            ref={projectsRef}
            className={`grid grid-cols-1 place-items-center  md:flex md:justify-center md:items-center gap-4   w-[90vw] transition-all duration-700 ease-out ${
              projectsInView
                ? "opacity-100 translate-y-10"
                : "opacity-0 translaye-y-0"
            }`}
          >
            {/*use iframe when the codeWithMe project is live */}
            <div className="flex flex-col items-center gap-2 md:w-[40%] w-[90vw] p-2">
              <div>
                <img
                  src="assets/codeWithMe.png"
                  alt="CodeWithMe landing page picture"
                  width={400}
                />
              </div>
              <div className="flex flex-col md:items-start items-center leading-loose">
                <h3 className="underline">CodeWithMe</h3>
                <span>An online learning hub for programming.</span>
                <span>
                  Learn from basics to Pro. Signup To Learn Programming For
                  FREE.
                </span>
                <button className="bg-slate-800 border-2 border-white px-2 rounded-md mt-2">
                  Visit Site
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 md:w-[40%] w-[90vw] p-2 ">
              <div>
                <img
                  src="assets/hostel-project.png"
                  alt="CodeWithMe landing page picture"
                  width={400}
                />
              </div>
              <div className="flex flex-col md:items-start items-center leading-loose">
                <h3 className="underline">Hostel Management Project</h3>
                <span>A web based hostel management system.</span>
                <span>
                  Designed for tenant management, room allocation and more..
                </span>
                <button className="bg-slate-800 border-2 border-white px-2 rounded-md mt-2">
                  Visit Site
                </button>
              </div>
            </div>
          </div>
          {/*see nore section */}
          <div className="w-full flex justify-end mt-8  text-sm">
            <span>See more...</span>
          </div>
        </div>
        {/*blog  section */}
        <div
          id="blog"
          ref={blogpostsRef}
          className={` bg-white text-black w-screen flex flex-col items-center transition-all duration-700 ease-out ${
            blogpostsInView
              ? "opacity-100 translate-y-10"
              : "opacity-0 translate-y-0"
          }`}
        >
          <h3 className="font-bold">Latest Stories From Our Blog</h3>
          <div className="w-[100%] flex  flex-col items-center flex-wrap gap-2 p-2 leading-loose">
            {/*blog1 */}
            <div className="flex flex-col gap-2 items-center pl-2 md:pl-0">
              <h4 className="underline font-bold">
                <em> CodeWthMe Web Platform to be launched soon</em>
              </h4>
              <article>
                The free web learning platform "CodeWithMe" will be launched
                soon according to lead Engineer Batong Gevaise.
              </article>
            </div>
            <hr className="w-[100vw] h-2 bg-slate-800" />
            {/*blog 2*/}
            <div className="flex flex-col gap-2 items-center pl-2 md:pl-0">
              <h4 className="underline font-bold">
                <em> CodeWthMe Web Platform to be launched soon</em>
              </h4>
              <article>
                The free web learning platform "CodeWithMe" will be launched
                soon according to lead Engineer Batong Gevaise.
              </article>
            </div>
          </div>
        </div>
        {/*contributors section */}
        <div
          id="contributors"
          ref={contributorsRef}
          className={`flex flex-col gap-4 items-center mt-8 transition-all duration-1000 ease-out ${
            contributorsInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-bold text-xl">Contributors</h2>
          <div className="grid grid-cols-2 md:flex  gap-4 md:gap-2 w-[100%]">
            <div
              className={` flex flex-col items-center  md:w-[200px] transition-all duration-700 ease-out `}
            >
              <img
                src="assets/mueena-pic.jpg"
                alt="dev-mueena"
                className="h-[130px] w-[130px] object-cover "
              />
              <div className="flex flex-col items-center leading-normal">
                <h2>Musa Mueena</h2>
                <span>CEO</span>
                <span>github.com/mueena</span>
                <button className="bg-slate-800 border-2 border-white px-2 rounded-md mt-2">
                  <a href="https://github.com/batgev">Reach Out</a>
                </button>
              </div>
            </div>
            <div
              className={`flex flex-col items-center w-[200px] transition-all duration-700 ease-out`}
            >
              <img
                src="assets/kombat.jpg"
                alt="dev-gee"
                className="h-[130px] w-[130px] object-cover "
              />
              <div className="flex flex-col items-center leading-normal">
                <h2>Emmanuel Kombat</h2>
                <span>UI & Ux Designer</span>
                <span>github.com/kombat</span>
                <button className="bg-slate-800 border-2 border-white px-2 rounded-md mt-2">
                  <a href="https://github.com/batgev">Reach Out</a>
                </button>
              </div>
            </div>
            <div
              className={`flex flex-col items-center w-[200px] transition-all duration-700 ease-out `}
            >
              <img
                src="assets/alhassan.jpg"
                alt="dev-gee"
                className="h-[130px] w-[130px] object-cover "
              />
              <div className="flex flex-col items-center leading-normal">
                <h2>Iddrisu Alhassan</h2>
                <span>Frontend Developer</span>
                <span>github.com/batgev</span>
                <button className="bg-slate-800 border-2 border-white px-2 rounded-md mt-2">
                  <a href="https://github.com/batgev">Reach Out</a>
                </button>
              </div>
            </div>
            <div
              className={`flex flex-col items-center  w-[200px] transition-all duration-700 ease-out`}
            >
              <img
                src="assets/galaxy.jpg"
                alt="dev-gee"
                className="h-[130px] w-[130px] object-cover "
              />
              <div className="flex flex-col items-center leading-normal">
                <h2>Galaxy</h2>
                <span>Team Member</span>
                <span>github.com/batgev</span>
                <button className="bg-slate-800 border-2 border-white px-2 rounded-md mt-2">
                  <a href="https://github.com/batgev">Reach Out</a>
                </button>
              </div>
            </div>
            <div
              className={`flex flex-col items-center   w-[200px] transition-all duration-700 ease-out `}
            >
              <img
                src="assets/gee.png"
                alt="dev-gee"
                className="h-[130px] w-[130px] object-cover "
              />
              <div className="flex flex-col items-center leading-normal">
                <h2>Batong Gevaise</h2>
                <span>Full Stack Developer</span>
                <span>github.com/batgev</span>
                <button className="bg-slate-800 border-2 border-white px-2 rounded-md mt-2">
                  <a href="https://github.com/batgev">Reach Out</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative z-0" id="contact-us">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
