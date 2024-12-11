import React from 'react'

const Rate = () => {
  return (
    <div className='space-y-6 m-20' >
      <h1 className='button font-bold text-4xl text-center text-blue-950 w-auto '>We're a team of enthusiastic and skilled Individuals</h1>
      <h4 className='button font-thin text-xl text-center text-grey w-auto '>"united online, igniting innovation and shaping the future, one virtual connection at a time."</h4>
      <div className='justify-center flex space-x-40 pt-20'>
        <div className='space-y-5 text-center'>
            <h1 className='button font-bold text-5xl  text-blue-950 w-auto '>75%</h1>
            <p className='text-xl font-light'>Reduction in Client Cost</p>
        </div>
        <div className='space-y-5 text-center'>
            <h1 className='button font-bold text-5xl  text-blue-950 w-auto '>75%</h1>
            <p className='text-xl font-light'> Increase in Client Satisfaction</p>
        </div>
        <div className='space-y-5 text-center'>
            <h1 className='button font-bold text-5xl  text-blue-950 w-auto '>75%</h1>
            <p className='text-xl font-light'>Reduction in Time-To-Market for projects</p>
        </div>
      </div>
    </div>
  )
}

export default Rate
