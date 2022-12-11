import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import ReactWhatsapp from "react-whatsapp";

const IntroDuction = () => {
  return (
    <div className=" md:w-1/2 mx-auto  min-h-screen flex items-center  justify-center p-5">
      <div className="md:gap-16 items-center ">
        <div data-aos="flip-left">
          {" "}
          <img
            src="https://i.ibb.co/7jfS6d3/pervez-linkeden-removebg-preview.png"
            alt=""
            className=" md:h-64  rounded-2xl mb-8 transform hover:scale-105 duration-700 outline outline-offset-2 outline-4"
          />
        </div>

        <div>
          <h2 className=" font-bold mb-2 text-3xl ">
            A full Time <br />
            <span style={{ color: "rgb(249 115 22)", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Full Stack Web Developer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="mb-5">
            Hello I am
            <strong> Md. Pervez Hossain</strong> , a full time Full Stack Web
            developer I have a well-rounded skill set, and a passion for
            bringing innovative ideas to fruition. I have creative idea about
            designing And Development that I would like to share with you.
          </p>
          <div className="flex gap-5 mb-5">
            <div>
              <a
                href="https://www.facebook.com/Pervez.ph"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300 text-xl"></FaFacebook>
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/md-pervez-hossain/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300 text-xl"></FaLinkedin>
              </a>
            </div>

            <div>
              <a
                href="https://github.com/Md-Pervez-Hossain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300 text-xl"></FaGithub>
              </a>
            </div>
            <div>
              <FaWhatsapp className="cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300 text-xl">
                <ReactWhatsapp number="+8801631309254" message="Hi There !!!" />
              </FaWhatsapp>
            </div>
          </div>
          <Link to="/about">
            <button className="btn btn-outline capitalize transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 hover:text-white duration-300">
              About MySelf
            </button>
          </Link>
          <a
            href="https://drive.google.com/drive/u/1/folders/1LGGEcEw82Fh5ppvaKy7IlVVicKgDdTsu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline capitalize transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 hover:text-white duration-300 md:ml-3">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroDuction;
