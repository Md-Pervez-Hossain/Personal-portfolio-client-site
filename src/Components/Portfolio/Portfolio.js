import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayPortfolio from "./DisplayPortfolio";

const Portfolio = () => {
  const portfolios = useLoaderData();
  console.log(portfolios);
  return (
    <div className="md:w-9/12 mx-auto">
      <div className="hidden md:block">
        <h2 className="md:text-7xl text-4xl text-center font-bold my-5">
          MY <span className="text-orange-500">PROJECTS</span>
        </h2>
        <div className="divider my-10">
          A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-10" data-aos="flip-left">
        {portfolios.map((portfolio) => (
          <DisplayPortfolio
            key={portfolio._id}
            portfolio={portfolio}
          ></DisplayPortfolio>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
