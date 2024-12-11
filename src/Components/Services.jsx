import React from 'react'

const Services = () => {
  return (
    <div id='services' className=' p-10 '  >
        <div>
            <p className='button font-bold text-2xl text-center text-blue-950 w-auto ' >SERVICES</p>
        </div>
    {/* <marquee behavior="scroll" direction="left"> */}
    <div className='flex-wrap mt-10 space-y-5 '>
    <div className='services space-y-2 border-2 border-black p-5 bg-[#A4C3B2]' >
        <h1 className=' font-extrabold text-xl'>Web Development</h1>
        <p>Building responsive and modern websites using the latest technologies.</p>
        <div className='flex space-x-2'>
        <img src="/src/assets/react.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/angular.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/python.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/java.png"  height='50px' width='70px' alt="none" />
        </div>  
    </div>
    <div className='services space-y-2 border-2 border-black p-5 bg-[#A4C3B2]' >
        <h1 className=' font-extrabold text-xl'>Mobile App Development</h1>
        <p>Creating user-friendly mobile apps for iOS and Android platforms.</p>
        <div className='flex space-x-2'>
        <img src="/src/assets/reactnative.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/java.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/kotlin.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/ios.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/swift.png"  height='50px' width='70px' alt="none" />        
        <img src="/src/assets/android studio.webp"  height='50px' width='70px' alt="none" />
        </div>
        
    </div>
    <div className='services space-y-2 border-2 border-black p-5 bg-[#A4C3B2]' >
        <h1 className=' font-extrabold text-xl'>Web Designing</h1>
        <p>We provide attractive and efficient designs for your projects.</p>
        <div className='flex space-x-2'>
        <img src="/src/assets/canva.webp"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/Photoshop.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/figma.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/wordpress.png"  height='50px' width='70px' alt="none" />
        </div>
        
    </div>

    <div className='services space-y-2 border-2 border-black p-5 bg-[#A4C3B2]' >
        <h1 className=' font-extrabold text-xl'>Data Analytics</h1>
        <p>we will conert your raw data to uderstanding readable data with help of these softwares </p>
        <div className='flex space-x-5'>
        <img src="/src/assets/python.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/database.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/tableau.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/Power-BI.jpg"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/excel.png"  height='50px' width='70px' alt="none" />
        </div>
        
    </div>
    <div className='services space-y-2 border-2 border-black p-5 bg-[#A4C3B2]' >
        <h1 className=' font-extrabold text-xl'>Digital Marketing</h1>
        <p>Enhancing your website’s visibility and ranking on search engines</p>
        <div className='flex space-x-3'>
        <img src="/src/assets/seo.png"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/canva.webp"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/googleanalytics.jpeg"  height='50px' width='70px' alt="none" />
        <img src="/src/assets/social.webp"  height='50px' width='70px' alt="none" />
        </div>
        
    </div>
  
    </div>  
    {/* </marquee> */}
    </div>
  )
}

export default Services
