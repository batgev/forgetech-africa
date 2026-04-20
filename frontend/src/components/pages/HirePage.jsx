import React, { useState } from "react";
import toast from "react-hot-toast";
import Header from "../Header";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { API_URL } from "../../api";
const HirePage = () => {
  //states for input fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  //project request submitting function
  const handleSubmit = async () => {
    if (
      !fullname ||
      !email ||
      !phoneNumber ||
      !businessName ||
      !projectDescription ||
      !serviceType ||
      !budget ||
      !timeline
    ) {
      return toast.error("All fields are important");
    }

    try {
      const res = await fetch(`${API_URL}/hire`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          fullname,
          email,
          phoneNumber,
          businessName,
          projectDescription,
          serviceType,
          budget,
          timeline,
        ]),
      });
      const data = await res.json();
      if (!res.ok) return toast.error(data.error);
      toast.success("Message sent");
      setFullname("");
      setBudget("");
      setEmail("");
      setPhoneNumber("");
      setProjectDescription("");
      setServiceType("");
      setTimeline("");
      setBusinessName("");
    } catch (_) {
      toast.error("poor internet connection,try again later");
    }
  };

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
          <h1 className="text-[2.5rem] md:text-[3rem]">Hire Our Team</h1>
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
                required
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="emial"
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="tel">Phone Number</label>
              <input
                type="tel"
                id="tel"
                placeholder="+233 000 000 000"
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="business-name">Business Name</label>
              <input
                type="text"
                placeholder="Meta"
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="project-description">Describe your project</label>
              <textarea
                name="project-description"
                id="project-description"
                placeholder="provide a brief description of your project.."
                className="border rounded-sm outline-cyan-700 p-2 bg-blue-50"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              ></textarea>
            </div>
          </form>
          <form className="flex flex-col gap-4 text-cyan-800 md:w-[400px]   rounded-md p-2">
            <div>
              <h3 className="text-center text-2xl font-semibold  underline">
                Service Selection
              </h3>
            </div>
            <div className="flex flex-col gap-1 w-[95%] md:w-auto ">
              <label htmlFor="service-type">Service Type</label>
              <select
                name="service-type"
                id="service-type"
                className="border rounded-sm outline-cyan-700 w-full md:w-auto p-2 bg-blue-50"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              >
                <option value="Website Design">Website Design</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Web Application">Web Application</option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="Maintenance">Maintenace</option>
                <option value="Custom Solution">Custom Solution</option>
              </select>
            </div>
            <div className="flex flex-col gap-1  w-[95%] md:w-auto ">
              <label htmlFor="budget">Budget</label>
              <select
                name="budget"
                id="budget"
                className="border rounded-sm outline-cyan-700 p-2 w-full md:w-auto bg-blue-50"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="$100-$300">$100-$300</option>
                <option value="$300-$700">$300-$700</option>
                <option value="$700-$1500">$700-$1500</option>
                <option value="Custom Quote">Custom Quote</option>
              </select>
            </div>
            <hr className="w-[90%] md:w-auto" />
            <div className="flex flex-col gap-4 mt-6">
              <div className="text-center text-2xl text-cyan-800 font-semibold underline">
                Project TimeLines
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                  <input
                    type="radio"
                    name="timeline"
                    id="urgent"
                    onChange={() => setTimeline("Urgent (1 week)")}
                  />
                  <label htmlFor="urgent">Urgent (1 week)</label>
                </div>
                <div className="flex gap-1">
                  <input
                    type="radio"
                    name="timeline"
                    id="standard"
                    onChange={() => setTimeline("Standard (2-4 weeks)")}
                  />
                  <label htmlFor="standard">Standard (2-4 weeks)</label>
                </div>
                <div className="flex gap-1">
                  <input
                    type="radio"
                    id="flexible"
                    name="timeline"
                    onChange={() => setTimeline("Flexible")}
                  />
                  <label htmlFor="flexible">Flexible</label>
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
          <button
            className="bg-cyan-800 text-white font-bold hover:scale-90 transition-all duration-100  ease-in-out  outline-none py-4 rounded-md w-[80%] px-2 md:px-0 md:w-[50%]"
            onClick={handleSubmit}
          >
            Submit Project Request
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HirePage;
