import React from 'react';

const Join = () => {
  return (
    <div className='text-center space-y-14 my-32 px-4 sm:px-0'>
      {/* Heading Section */}
      <div>
        <h1 className='font-extrabold text-3xl sm:text-5xl'>Join Our Team</h1>
        <p className='text-lg sm:text-xl pt-2 font-mono'>Realize Your Potential</p>
      </div>

      {/* Button */}
      <button className='font-thin text-xl sm:text-2xl border-2 border-black py-1 px-5 bg-slate-200 hover:bg-black hover:text-white hover:font-bold rounded-full'>
        Explore Figro Careers
      </button>

      {/* Divider */}
      <div className='bg-slate-600 h-1'></div>

      {/* Social Section */}
      <div className='text-start px-4 sm:px-11 space-y-2'>
        <p className='font-light text-xl sm:text-2xl'>Social</p>
        <h1 className='font-bold text-2xl sm:text-3xl'>Follow us for the latest updates</h1>

        {/* Social Icons */}
        <div className='flex flex-col sm:flex-row justify-between p-6 space-y-6 sm:space-y-0'>
          <div className='space-y-4 flex flex-col items-center'>
            <img
              src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734538221/facebook_rrdqiy.png"
              alt="Facebook"
              className='h-12 w-12 sm:h-14 sm:w-14'
            />
            <p className='font-light text-xl sm:text-2xl'>Facebook</p>
          </div>
          <div className='space-y-4 flex flex-col items-center'>
            <img
              src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734538256/instagram_r7rcwv.png"
              alt="Instagram"
              className='h-12 w-12 sm:h-14 sm:w-14'
            />
            <p className='font-light text-xl sm:text-2xl'>Instagram</p>
          </div>
          <div className='space-y-4 flex flex-col items-center'>
            <img
              src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734538276/twitter_ce5zlg.png"
              alt="Twitter"
              className='h-12 w-12 sm:h-14 sm:w-14'
            />
            <p className='font-light text-xl sm:text-2xl'>Twitter</p>
          </div>
          <div className='space-y-4 flex flex-col items-center'>
            <img
              src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734539914/whatsapp_1_jj6mzo.png"
              alt="WhatsApp"
              className='h-12 w-12 sm:h-14 sm:w-14'
            />
            <p className='font-light text-xl sm:text-2xl'>WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;