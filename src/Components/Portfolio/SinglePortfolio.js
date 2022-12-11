import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const SinglePortfolio = () => {
  const portfolioInfo = useLoaderData();
  const {
    title,
    image,
    frontend,
    backend,
    details,
    webLink,
    clientGithub,
    serverGithub,
  } = portfolioInfo;

  return (
    <div className="md:w-9/12 mx-auto">
      <div>
        <div data-aos="flip-left">
          <img src={image} alt="" className="rounded-md" />
        </div>
        <div data-aos="flip-right">
          <p className="text-3xl font-bold my-8">{title}</p>
          <p className="text-xl font-semibold mb-8">
            FrontEnd Technology :{" "}
            <span className="font-normal ">{frontend}</span>
          </p>
          <p className="text-xl font-semibold mb-8">
            BackEnd Technology : <span className="font-normal ">{backend}</span>
          </p>

          <p className=" font-bold text-xl mb-3 text-orange-500">
            CaseStudy Of Project :
          </p>
          <p className="mb-5">
            <span className="font-normal ">{details}</span>
          </p>
          <a href={`${webLink}`} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline">Live Website</button>
          </a>
          <a href={`${clientGithub}`} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline ml-5">Client-Site Github</button>
          </a>
          <a href={`${serverGithub}`} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline md:ml-5 mt-5">
              Server-Site Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SinglePortfolio;
