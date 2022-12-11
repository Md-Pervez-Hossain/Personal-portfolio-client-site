import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaPhone, IconName } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d9po57c",
        "template_0k399nv",
        form.current,
        "dNLaCG_qiabZLWYXe"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="md:w-9/12 mx-auto " data-aos="flip-left">
      <h2 className="text-5xl font-Normal my-5 ">Contact With Me </h2>
      <p className="mb-5">
        If you have any suggestion, project or even you want to say Hello..
        please fill out the form below and I will reply you shortly.
      </p>
      {/* <form>
        <div>
          <input
            type="text"
            placeholder="Type Your Name"
            className="input input-bordered w-full mb-5 "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Type Your Email"
            className="input input-bordered w-full mb-5 "
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered w-full mb-5"
            placeholder="Type Your Message"
          ></textarea>
        </div>
        <button className="btn btn-outline w-full capitalize">
          Send Message
        </button>
      </form> */}

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className="input input-bordered w-full mb-5 "
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="input input-bordered w-full mb-5 "
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          className="input input-bordered w-full mb-5 "
          required
        />
        <input
          type="submit"
          value="Send"
          className="input input-bordered w-full mb-5 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Contact;
