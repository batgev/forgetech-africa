import React, { useState } from "react";

function Footer() {
  //state for sending messages
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessge] = useState("");

  const sendMessage = async () => {
    if (!name | !email | !message) return;
    try {
      const res = await fetch(`http://localhost:5000/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) return alert(`${data.error}`);
      alert(`${data.message}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-[100%] flex flex-col bg-slate-950 text-sm mt-8">
      <div>
        <div className="flex  flex-wrap justify-evenly items-center  gap-4 ">
          <div className="flex flex-col items-center gap-2 ">
            <h3>Contact Us</h3>
            <div className="flex flex-col gap-2 text-black">
              <input
                type="text"
                className="bg-white pl-2 outline-none"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="bg-white pl-2 outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="bg-white pl-2 outline-none"
                placeholder="Message..."
                value={message}
                onChange={(e) => setMessge(e.target.value)}
              ></textarea>
              <button
                type="button"
                className="border-2 border-white px-2 outline-none text-white"
                onClick={sendMessage}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Site Map</h3>
            <ul className=" underline md:tracking-[2px] leading-loose">
              <li>
                <a href="#top">Back to Top</a>
              </li>
              <li>
                <a href="#top">About Us</a>
              </li>
              <li>
                <a href="#contributors">Contributors</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="assets/logo.png" alt="" className="w-14 rounded-full" />
            <h3>ForgeTech-Africa</h3>
            <span>+233598778437</span>
            <span>+23300000000</span>
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
