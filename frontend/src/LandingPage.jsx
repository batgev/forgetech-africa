import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
//This is going to be the landing page for the team-G project; should contain info about the team, display participants roles and contact info, and a contact us section for collaboration and contact us. The page should have a modern look and be responsive to every decvice.
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import Services from "./components/pages/Services";
library.add(fas, far, fab);
const LandingPage = () => {
  //typing effect
  const text = "Built for Your Business Growth!";
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        i = 0;
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-center gap-2 h-screen  w-[100%] md:w-full"
      style={{
        background: "linear-gradient(135deg,#ffffff,#f7fbff 40%,#eef6ff 100%",
      }}
    >
      <Header />

      {/*hero section */}
      <div className="flex-1 flex md:flex-row flex-col gap-8 items-center md:w-full justify-around md:pl-8  ">
        <div className="flex flex-col leading-snug font-light md:ml-8">
          <span className="text-2xl md:text-4xl text-cyan-800 text-center">
            AFFORDABLE CUSTOM
          </span>
          <span className="text-[4rem] md:text-[9rem] text-cyan-950 font-sans font-bold">
            WEBSITES
          </span>
          <pre className=" md:text-3xl  text-cyan-800 text-center font-semibold">
            {displayedText}
          </pre>
          <div className="flex gap-4 mt-8 justify-center text-center">
            <Link to="/hire" className="bg-cyan-800 text-white p-2 font-bold w-[40%]">
              Get Started
            </Link>
            <Link className="border-2 border-black p-2 w-[40%]">
              View Portfolio
            </Link>
          </div>
        </div>
        <div className="pr-2">
          <img src="/assets/woman.webp" alt="" className="w-[500px] " />
          <div className="ui-card">&lt;section class="hero"&gt;</div>
          <div className="floating-card shadow-md">
            <h4>SEO Score 98%</h4>
          </div>
          <div className="floating-card1 shadow-md">
            <h4>+120% Traffic</h4>
          </div>
          <div className="floating-card2 shadow-md">
            <h4>Mobile Firendly</h4>
          </div>
        </div>
      </div>

      {/**services section--mobile */}
      <div className="md:hidden mt-8 w-full ">
        <Services />
      </div>
    </div>
  );
};

export default LandingPage;
