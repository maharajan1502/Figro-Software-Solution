import React from 'react';

const About = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl md:text-3xl text-center text-blue-950 w-auto pt-4 mt-4">
        About Us
      </h1>

      <div id="aboutus" className="flex flex-col md:flex-row items-center justify-between w-full h-auto my-10 px-6 md:px-20">
        
        {/* Left Side - Text Content */}
        <div className="w-full md:w-96 space-y-4">
          <p className="font-bold text-2xl md:text-3xl">
            We Provide Innovative IT Solutions For Your Business
          </p>
          <p className="font-light text-lg md:text-xl">
            We are passionate about crafting cutting-edge solutions that empower businesses to thrive in the digital era.
            As a leading full-stack development software company, we specialize in delivering end-to-end solutions that
            seamlessly integrate front-end and back-end technologies.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-auto flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1741240845/IMG-20250305-WA0007_1_cmr6am.jpg"
            alt="About Us"
            className="max-w-full md:w-[500px] h-auto"
          />
        </div>
      </div>

      <hr className="border-t-2 border-gray-300 w-4/5 mx-auto my-6" />
    </div>
  );
};

export default About;
