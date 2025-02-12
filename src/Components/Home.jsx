import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className=' bg-[#CCE3DE] h-auto border-b-2 border-black w-auto'> 
     <Navbar/>
     <div className='items-center m-48 text-center space-y-2'>
        <h1 className='text-5xl font-extrabold'>Fullstack Software</h1>
        
        <h1 className='text-5xl font-extrabold'>Development Company</h1>
        <p className='font-light text-xl'>Way to go, quality products!</p>
     </div>
     <div>
        <marquee className='flex p-6' direction="left">
            <div className='flex space-x-20'>
                <div className='px-5 py-3 bg-[#bcd8d4] items-center justify-center text-center flex space-x-3'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431024/web-development_uzieko.png" height='40px' width='40px' alt="nothing" />
                <p >Web Development</p>
                </div>
                
                <div className='px-5 py-3 bg-[#bcd8d4] items-center justify-center text-center flex space-x-3'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431312/app-development_l2smzw.png" height='40px' width='40px' alt="nothing" />
                <p> Android Development</p>
                </div>
                    
                <div className='px-5 py-3 bg-[#bcd8d4] items-center justify-center text-center flex space-x-3'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431049/web-designing_tqkwwa.png" height='40px' width='40px' alt="nothing" />
                <p >Web Designing</p>
                </div>
                    
                <div className='px-5 py-3 bg-[#bcd8d4] items-center justify-center text-center flex space-x-3'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431309/digital-marketing_tgccno.png" height='40px' width='40px' alt="nothing" />
                <p >Digital Marketing</p>
                </div>
                
                <div className='px-5 py-3 bg-[#bcd8d4] items-center justify-center text-center flex space-x-3'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431308/document-management_qssmcq.png" height='40px' width='40px' alt="nothing" />
                <p >Data Handling</p>
                </div>
                    
            </div>

        </marquee>
     </div>
    </div>
  )
}

export default Home
