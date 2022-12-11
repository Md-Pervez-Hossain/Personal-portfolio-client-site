import React from "react";

const AddPortfolio = () => {
  const handlePortfolio = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image = form.image.files[0];
    const frontend = form.frontend.value;
    const webLink = form.webLink.value;
    const backend = form.backend.value;
    const clientGithub = form.clientGithub.value;
    const serverGithub = form.serverGithub.value;
    const details = form.details.value;
    console.log({ title, image, frontend, backend, details });
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      "https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.display_url);
        const portfolioInfo = {
          title,
          image: data.data.display_url,
          frontend,
          backend,
          details,
          webLink,
          clientGithub,
          serverGithub,
        };
        fetch("http://localhost:5000/addportdolio", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(portfolioInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              alert("PortFolio SuccessFully Added");
              form.reset();
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="md:w-9/12 mx-auto" data-aos="flip-left">
      <h2 className="text-xl my-5">Add Portfolio</h2>
      <form onSubmit={handlePortfolio}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Type Your Project Tittle"
            className="input input-bordered w-full  mb-5"
          />
        </div>
        <div>
          <input
            name="image"
            type="file"
            className="file-input file-input-bordered w-full mb-5 "
          />
        </div>
        <div>
          <input
            type="text"
            name="frontend"
            placeholder="Type Your Front End Technology"
            className="input input-bordered w-full  mb-5"
          />
        </div>

        <div>
          <input
            name="backend"
            type="text"
            placeholder="Type Your Back End Technology"
            className="input input-bordered w-full  mb-5"
          />
        </div>
        <div>
          <input
            name="webLink"
            type="text"
            placeholder="Type Your Website Link"
            className="input input-bordered w-full  mb-5"
          />
        </div>
        <div>
          <input
            name="clientGithub"
            type="text"
            placeholder="Type Your Client GitHub Link"
            className="input input-bordered w-full  mb-5"
          />
        </div>
        <div>
          <input
            name="serverGithub"
            type="text"
            placeholder="Type Your Server Github Link"
            className="input input-bordered w-full  mb-5"
          />
        </div>
        <div>
          <textarea
            name="details"
            className="textarea textarea-bordered w-full mb-5 "
            placeholder="Your Project Details"
          ></textarea>
        </div>
        <button className="btn btn-outline w-full capitalize">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
