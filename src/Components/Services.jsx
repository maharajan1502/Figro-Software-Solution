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
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431196/react_mm4ckl.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431313/angular_clhwjg.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431154/python_jbg51h.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431302/java_agpao4.png"  height='50px' width='70px' alt="none" />
        </div>  
    </div>
    <div className='services space-y-2 border-2 border-black p-5 bg-[#A4C3B2]' >
        <h1 className=' font-extrabold text-xl'>Mobile App Development</h1>
        <p>Creating user-friendly mobile apps for iOS and Android platforms.</p>
        <div className='flex space-x-2'>
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431183/reactnative_hu80wz.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431302/java_agpao4.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431302/kotlin_ajyi1e.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431303/ios_bpimh4.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431080/swift_dvzbul.png"  height='50px' width='70px' alt="none" />        
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431315/android_studio_q5l0nl.webp"  height='50px' width='70px' alt="none" />
        </div>
        
    </div>
    <div className='services space-y-2 border-2 border-black p-5 bg-[#A4C3B2]' >
        <h1 className=' font-extrabold text-xl'>Web Designing</h1>
        <p>We provide attractive and efficient designs for your projects.</p>
        <div className='flex space-x-2'>
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431312/canva_nedbnu.webp"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431251/photoshop-camera_yvnjqi.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431306/figma_voxkbd.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734430946/wordpress_tgiqaw.png"  height='50px' width='70px' alt="none" />
        </div>
        
    </div>

    <div className='services space-y-2 border-2 border-black p-5 bg-[#A4C3B2]' >
        <h1 className=' font-extrabold text-xl'>Data Analytics</h1>
        <p>we will conert your raw data to uderstanding readable data with help of these softwares </p>
        <div className='flex space-x-5'>
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431154/python_jbg51h.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734531699/database_pex74b.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431080/tableau_vyi91t.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431251/Power-BI_g3rdfh.jpg"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431307/excel_vfgxsx.png"  height='50px' width='70px' alt="none" />
        </div>
        
    </div>
    <div className='services space-y-2 border-2 border-black p-5 bg-[#A4C3B2]' >
        <h1 className=' font-extrabold text-xl'>Digital Marketing</h1>
        <p>Enhancing your website’s visibility and ranking on search engines</p>
        <div className='flex space-x-3'>
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431110/seo_oopjo1.png"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431312/canva_nedbnu.webp"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431305/googleanalytics_tbjmys.jpg"  height='50px' width='70px' alt="none" />
        <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734431094/social_zkj7qe.webp"  height='50px' width='70px' alt="none" />
        </div>
        
    </div>
  
    </div>  
    {/* </marquee> */}
    </div>
  )
}

export default Services
