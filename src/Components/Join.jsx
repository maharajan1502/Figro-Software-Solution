import React from 'react'

const Join = () => {
  return (
    <div className='text-center space-y-14 my-32'>
     <div>
      <h1 className='font-extrabold text-5xl'>join our team</h1>
     <p className='text-xl pt-2 font-mono' >realize your potential</p>
     </div>
     <button className='font-thin text-2xl border-2 border-black py-1 px-5 bg-slate-200 hover:bg-black hover:text-white hover:font-bold rounded-full'>Explore RM Carrers</button>
     <div className='bg-slate-600 h-1'>
      </div>
     <div className='text-start px-11 space-y-2'>
        <p className='font-light text-2xl '>Social</p>
        <h1 className=' fon-bold text-3xl'>Follow us for the latest updates</h1>
        <div className=' flex justify-between p-6'>
            <div className='space-y-4 justify-center'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734538221/facebook_rrdqiy.png" alt="none" height='50px' width='70px'/>
                <p className='font-light text-2xl '>Facebook</p>
            </div>
            <div className='space-y-4'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734538256/instagram_r7rcwv.png" alt="none" height='50px' width='70px'/>
                <p className='font-light text-2xl '>instagram</p>
            </div>
            <div className='space-y-4'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734538276/twitter_ce5zlg.png" alt="none" height='50px' width='70px'/>
                <p className='font-light text-2xl '>Twitter</p>
            </div>
            <div className='space-y-4'>
                <img src="https://res.cloudinary.com/dalwkmtmp/image/upload/v1734539914/whatsapp_1_jj6mzo.png" alt="none" height='50px' width='70px'/>
                <p className='font-light text-2xl '>Whatsapp</p>
            </div>

        </div>
     </div> 
    </div>
  )
}

export default Join
