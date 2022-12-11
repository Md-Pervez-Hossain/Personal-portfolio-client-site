import React from "react";

const AddBlog = () => {
  return (
    <div className="md:w-9/12 mx-auto" data-aos="flip-left">
      <h2 className="text-xl my-5">Add Blog</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Type Your Blog Tittle"
            className="input input-bordered w-full  mb-5"
          />
        </div>
        <div>
          <input
            type="file"
            className="file-input file-input-bordered w-full mb-5 "
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered w-full mb-5 "
            placeholder="Your Blog Details"
          ></textarea>
        </div>
        <button className="btn btn-outline w-full capitalize">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
