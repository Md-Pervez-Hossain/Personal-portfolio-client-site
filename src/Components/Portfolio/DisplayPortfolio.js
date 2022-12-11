import React from "react";
import { Link } from "react-router-dom";

const DisplayPortfolio = ({ portfolio }) => {
  const { _id, title, image, frontend, backend, details } = portfolio;

  return (
    <div>
      {/* <div>
        <img
          src={image}
          alt=""
          className="rounded-md transform hover:scale-105 duration-700 w-full "
        />
      </div>
      <div>
        <p className="text-xl font-bold my-5 text-black">{title}</p>
        <Link to={`/portfolio/${_id}`}>
          {" "}
          <button className="bg-orange-500 text-xl font-bold text-white px-4 py-2 rounded-md">
            Details
          </button>
        </Link>
      </div> */}
      <div className="card  bg-base-200 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="rounded-md transform hover:scale-105 duration-700 w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-3">{title}</h2>

          <div className="card-actions ">
            <Link to={`/portfolio/${_id}`}>
              <button className="btn btn-outline capitalize transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 hover:text-white duration-300 ">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPortfolio;
