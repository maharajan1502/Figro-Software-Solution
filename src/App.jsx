import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Footer from './Components/Footer'
import Rate from './Components/Rate'
import Join from './Components/Join'
import ContactForm from './Components/ContactForm'

const App = () => {
  return (
    <div className='mainBody'>
      <Home/>
      <About/>
      <Rate/>
      <Services/>
      <Join/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
