import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Footer from './Components/Footer'
import Rate from './Components/Rate'
import Reachus from './Components/Reachus'

const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Rate/>
      <Services/>
      <Footer/>
      {/* <Reachus/> */}
    </div>
  )
}

export default App
