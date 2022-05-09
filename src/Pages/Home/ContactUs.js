import React from "react";
import appointment from "../../assets/images/appointment.png";
import MainButton from "../Shared/MainButton";

const ContactUs = () => {
  return (
    <div
      className="text-center p-40"
      style={{ background: `url(${appointment})` }}
    >
      <h3 className="text-3xl text-primary">Contuct Us</h3>
      <h1 className="text-4xl text-white my-5">Stay Connected With Us</h1>
      <input
        className="px-20 py-5 w-3/5 my-2 rounded-lg"
        type="email"
        placeholder="Email Address"
      />
      <br />
      <input
        className="px-20 py-5 w-3/5 my-2 rounded-lg"
        type="text"
        placeholder="Subject"
      />
      <br />
      <textarea
        name="text"
        id=""
        className=" my-2 w-3/5 rounded-lg py-28 px-20"
        placeholder="Your Message"
      ></textarea>
      <br />
      <MainButton>Submit</MainButton>
    </div>
  );
};

export default ContactUs;
