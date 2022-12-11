import React from "react";

const About = () => {
  return (
    <div>
      <div className="">
        <div data-aos="flip-left">
          <img
            src="https://i.ibb.co/7jfS6d3/pervez-linkeden-removebg-preview.png"
            alt=""
            className=" md:w-52 mb-10 rounded-2xl transform hover:scale-105 duration-700 outline outline-offset-2 outline-4"
          />
        </div>
        <h2 className="text-3xl font-bold my-5 text-orange-500">
          About MySelf
        </h2>
        <div>
          <p className="my-8">
            Hello I am Md. Pervez Hossain, a full time Full Stack Web Developer
            creating effective Web Design And Development for companies . I have
            a well-rounded skill set, and a passion for bringing innovative
            ideas to fruition. I have creative idea about designing that I would
            like to share with you. I believe in creating original, attractive
            Web solutions that resonate with your audience. My devotion is based
            on your unique needs. MY creative process, that will help your brand
            stand out from the crowd.
          </p>
          <div className="flex flex-col md:flex-row md:gap-10 ">
            <div>
              <h2 className="font-bold  mb-2">
                Name : <span className="font-normal">Md. Pervez Hossain</span>
              </h2>
              <p className="font-bold  mb-2">
                Birthdate : <span className="font-normal">31/12/1996</span>
              </p>
              <p className="font-bold  mb-2">
                Nationality : <span className="font-normal">Bangladesh</span>
              </p>
              <p className="font-bold  mb-2">
                Experience : <span className="font-normal">1 Years</span>
              </p>
              <p className="font-bold  mb-2">
                Address : <span className="font-normal">Dhaka, BAngldesh</span>
              </p>
            </div>
            <div>
              <p className="font-bold  mb-2">
                Freelance : <span className="font-normal">Avaiable</span>
              </p>
              <p className="font-bold  mb-2">
                Langages :{" "}
                <span className="font-normal">English And Bangla</span>
              </p>
              <p className="font-bold  mb-2">
                Phone : <span className="font-normal">+8801631309254</span>
              </p>
              <p className="font-bold  mb-2">
                Email :{" "}
                <span className="font-normal mb-2">
                  p.hossain9254@gmail.com
                </span>
              </p>
              <p className="font-bold  mb-2">
                Skypee : <span className="font-normal">p.hossain</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold my-5 text-orange-500">Skills</h2>
      </div>
      <div data-aos="flip-left">
        <p>HTML</p>
        <progress className="progress w-full" value="90" max="100"></progress>
        <br />
        <p>CSS</p>
        <progress className="progress w-full" value="85" max="100"></progress>
        <br />
        <p> Tailwind CSS</p>
        <progress className="progress w-full" value="80" max="100"></progress>
        <br />
        <p> BootStrap </p>
        <progress className="progress w-full " value="90" max="100"></progress>
        <br />
        <p>React-BootStrap </p>
        <progress className="progress w-full " value="80" max="100"></progress>
        <br />
        <p>JavaScript</p>
        <progress className="progress w-full" value="90" max="100"></progress>
        <br />
        <p>React Js</p>
        <progress className="progress w-full" value="90" max="100"></progress>
        <br />
        <p>Node Js</p>
        <progress className="progress w-full" value="60" max="100"></progress>
        <br />
        <p>Express Js</p>
        <progress className="progress w-full" value="65" max="100"></progress>
        <br />
        <p>Mongodb</p>
        <progress className="progress w-full" value="60" max="100"></progress>
        <br />
      </div>
    </div>
  );
};

export default About;
