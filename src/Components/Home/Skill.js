import React from "react";

const Skill = () => {
  return (
    <div>
      <progress className="progress w-56" value="0" max="100">
        HTML
      </progress>
      <progress className="progress w-56" value="10" max="100">
        CSS
      </progress>
      <progress className="progress w-56" value="40" max="100">
        Tailwind CSS
      </progress>
      <progress className="progress w-56" value="70" max="100">
        BootStrap 5
      </progress>
      <progress className="progress w-56" value="100" max="100">
        JavaScript
      </progress>
    </div>
  );
};

export default Skill;
