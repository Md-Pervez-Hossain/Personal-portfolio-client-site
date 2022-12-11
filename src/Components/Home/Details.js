import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBlog, FaHome, FaPhone, FaPortrait } from "react-icons/fa";
import "./Details.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Details = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="md:w-9/12 mx-auto md:my-16 p-5">
      <div className="flex flex-col md:flex-row  md:gap-52 ">
        <div className="mb-5 bg-slate-600  sticky top-0 z-10">
          <div className="lg:fixed  px-5 rounded-2xl ">
            {user?.email === "p.hossain9254@gmail.com" ? (
              <>
                {" "}
                <div className="flex items-center gap-5 ">
                  <FaHome></FaHome>
                  <NavLink to="/">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      Home
                    </p>
                  </NavLink>
                </div>
                <div className="flex items-center gap-5">
                  <FaPortrait></FaPortrait>
                  <NavLink to="/about">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      About
                    </p>
                  </NavLink>
                </div>
                <div className="flex items-center gap-5">
                  <FaHome></FaHome>
                  <NavLink to="portfolio">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      Projects
                    </p>
                  </NavLink>
                </div>
                <div className="flex items-center gap-5">
                  <FaPhone></FaPhone>
                  <NavLink to="contact">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      Contact
                    </p>
                  </NavLink>
                </div>
                <div className="flex items-center gap-5">
                  <FaBlog></FaBlog>
                  <NavLink to="blog">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      Blog
                    </p>
                  </NavLink>
                </div>
                <div className="flex items-center gap-5">
                  <FaBlog></FaBlog>
                  <NavLink to="addportfolio">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      Add PortFolio
                    </p>
                  </NavLink>
                </div>
                <div className="flex items-center gap-5">
                  <FaBlog></FaBlog>
                  <NavLink to="addblog">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      Add Blog
                    </p>
                  </NavLink>
                </div>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-5 ">
                  <FaHome></FaHome>
                  <NavLink to="/">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      Home
                    </p>
                  </NavLink>
                </div>
                <div className="flex items-center gap-5">
                  <FaPortrait></FaPortrait>
                  <NavLink to="/about">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      About
                    </p>
                  </NavLink>
                </div>
                <div className="flex items-center gap-5">
                  <FaHome></FaHome>
                  <NavLink to="portfolio">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      Projects
                    </p>
                  </NavLink>
                </div>
                <div className="flex items-center gap-5">
                  <FaPhone></FaPhone>
                  <NavLink to="contact">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      Contact
                    </p>
                  </NavLink>
                </div>
                <div className="flex items-center gap-5">
                  <FaBlog></FaBlog>
                  <NavLink to="blog">
                    <p className="mb-2 font-bold cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-300">
                      Blog
                    </p>
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Details;
