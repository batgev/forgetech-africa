import React from "react";

import { Link } from "react-router-dom";
function Footer() {
  //state for sending messages

  return (
    <div className="w-[100%] flex flex-col bg-slate-950 text-sm mt-8 text-white pt-4">
      <div>
        <div className="flex  flex-wrap justify-evenly items-center  gap-4 ">
          <div className="flex flex-col items-center gap-2 ">
            <h4 className="underline">Contributors</h4>
            <ul>
              <li>
                Batong Gevaise -Gitub{" "}
                <a href="https://github.com/batgev" className="text-blue-500">
                  @batgev
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Site Map</h3>
            <ul className=" underline md:tracking-[2px] leading-loose">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/hire">Hire Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="assets/logo.png" alt="" className="w-14 rounded-full" />
            <h3>ForgeTech-Africa</h3>
            <span>+233598778437</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-black mt-2">
        <span>&copy; ForgeTech-Africa 2026, All Rights Reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
