import React from 'react'

const About = () => {
  return (
    <>
    <div id='aboutus' className='flex  justify-between w-auto h-auto my-28  ' > 
      <div className='w-96  mx-40 space-y-4'>
         <h1 className='font-extrabold text-2xl text-blue-700'>About Us</h1>
         <p className='font-bold text-3xl'>We Provide Innovative IT Solutions For Your Business</p>
         <p className='font-light text-xl'>
         We are passionate about crafting cutting-edge solutions that 
         empower businesses to thrive in the digital era. As a leading 
         full-stack development software company, we specialize in delivering 
         end-to-end solutions that seamlessly integrate front-end and back-end technologies.</p>
      </div>
      <div className='text-xl font-semibold '>
      <img src="./src/assets/Pasted image.png" height-='300px' width='300px' alt="nothing" />
      </div>
      <hr/>
    </div>
    </>
  )
}

export default About
