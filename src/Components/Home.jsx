import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="bg-[#FFFFFF] h-auto border-b-2 border-black w-full">
      <Navbar />
      <div className="flex flex-col items-center text-center space-y-2 m-10 md:m-48">
        <h1 className="text-3xl md:text-5xl font-extrabold">Software</h1>
        <h1 className="text-3xl md:text-5xl font-extrabold">Development Company</h1>
        <p className="font-light text-lg md:text-xl">Way to go, quality products!</p>
      </div>

      <div className="overflow-x-auto w-full">
        <marquee className="flex p-4 md:p-6" direction="left">
          <div className="flex space-x-5 md:space-x-20">
            {[
              { img: 'https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431024/web-development_uzieko.png', text: 'Web Development' },
              { img: 'https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431312/app-development_l2smzw.png', text: 'Android Development' },
              { img: 'https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431049/web-designing_tqkwwa.png', text: 'Web Designing' },
              { img: 'https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431309/digital-marketing_tgccno.png', text: 'Digital Marketing' },
              { img: 'https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431308/document-management_qssmcq.png', text: 'Data Handling' }
            ].map((item, index) => (
              <div
                key={index}
                className="px-7 py-2 md:px-5 md:py-3 bg-[#edbb99] flex items-center justify-center text-center space-x-3 rounded-lg"
              >
                <img src={item.img} height="30px" width="30px" alt="icon" />
                <p className="text-sm md:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Home;
