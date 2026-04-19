import React from 'react'
import Header from '../Header';
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const HirePage = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 h-full  w-full text-[$4b5563]"
      style={{
        background: "linear-gradient(135deg,#ffffff,#f7fbff 40%,#eef6ff 100%",
      }}
    >
      {/**header-hidden in mobile */}

      <Header />
      {/**main section */}
      <div className="flex-1 flex flex-col gap-4 items-center w-full ">
        {/**hero section */}
        <div className="w-[80%]">
          <h1 className="text-[3rem]">Hire Our Team</h1>
          <span className="text-xl">
            Let's build a website that grows your business.
          </span>
          <br />
          <span>
            Tell us about your project and we'll get back to you with the best
            solution for your needs.
          </span>
        </div>

        <div
          className="flex md:flex-row md:justify-evenly flex-col bg-white rounded-lg md:p-4 gap-8  w-[90%] "
          style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
        >
          {/*contact form */}
          <form className="flex flex-col gap-4  text-cyan-800 md:w-[400px]  rounded-md p-2">
            <div className="text-center">
              <h3 className="text-2xl underline ">Personal Info</h3>
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
              <label htmlFor="business-name">Business Name</label>
              <input
                type="text"
                placeholder="Meta"
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="project-description">Describe your project</label>
              <textarea
                name="project-description"
                id="project-description"
                placeholder="provide a brief description of your project.."
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
              ></textarea>
            </div>
          </form>
          <form className="flex flex-col gap-4 text-cyan-800 w-[400px]   rounded-md p-2">
            <div>
              <h3 className="text-center text-2xl font-semibold  underline">
                Service Selection
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="service-type">Service Type</label>
              <select
                name="service-type"
                id="service-type"
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
              >
                <option value="Website Design">Website Design</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Web Application">Web Application</option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="Maintenance">Maintenace</option>
                <option value="Custom Solution">Custom Solution</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="budget">Budget</label>
              <select
                name="budget"
                id="budget"
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
              >
                <option value="$100-$300">$100-$300</option>
                <option value="$300-$700">$300-$700</option>
                <option value="$700-$1500">$700-$1500</option>
                <option value="Custom Quote">Custom Quote</option>
              </select>
            </div>
            <hr />
            <div className="flex flex-col gap-4 mt-6">
              <div className="text-center text-2xl text-cyan-800 font-semibold underline">
                Project TimeLines
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                  <input type="radio" name="timeline" />
                  <label htmlFor="urgent">Urgent (1 week)</label>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name="timeline" />
                  <label htmlFor="standard">Standard (2-4 weeks)</label>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name="timeline" />
                  <label htmlFor="standard">Flexible</label>
                </div>
              </div>
            </div>
          </form>

          {/**trust section */}
          <div className="md:pl-[40px]">
            <ul className="text-2xl flex  flex-col gap-4 justify-evenly h-full">
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
              <li>
                <FontAwesomeIcon icon="fa-check-double" color="green" />
                24hr response time
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-cyan-800 text-white font-bold outline-none py-4 rounded-md w-[50%]">
            Submit Project Request
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HirePage
