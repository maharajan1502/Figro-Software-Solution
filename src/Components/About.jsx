import React from 'react'

const About = () => {
  return (
    <> 
    <h1 className='button font-bold text-2xl text-center text-blue-950 w-auto pt-4 mt-4' >About Us</h1>
    <div id='aboutus' className='flex  justify-between w-auto h-auto my-10  ' > 
     
      <div className='w-96  mx-40 space-y-4'>
         
         <p className='font-bold text-3xl'>We Provide Innovative IT Solutions For Your Business</p>
         <p className='font-light text-xl'>
         We are passionate about crafting cutting-edge solutions that 
         empower businesses to thrive in the digital era. As a leading 
         full-stack development software company, we specialize in delivering 
         end-to-end solutions that seamlessly integrate front-end and back-end technologies.</p>
      </div>
      <div className='text-xl font-semibold '>
      <img src="/src/assets/logo/WhatsApp Image 2025-03-05 at 12.34.08 PM.jpeg" style={{ width: '500px', paddingTop: '80px' }} />
      </div>
      <hr/>
    </div>
    </>
  )
}

export default About
