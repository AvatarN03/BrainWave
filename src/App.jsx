import React from 'react'
import Header from "./components/Header"
import ButtonGradient from './assets/svg/ButtonGradient'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Service from './components/Service'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <Service/>
        <Pricing/>
        <Roadmap />
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App