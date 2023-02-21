import React from 'react'
import Header from '../Header/Header';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Achivements from '../Achivements/Achivements';
import About from '../../About/About';
import MovingGallery from '../MovingGallery/MovingGallery';
import Principal from '../Principal/Principal';
import Teachers from '../Teachers/Teachers';
const Home = () => {
  return (
    <div>
        <Header />
        <NavbarMenu />
        <Hero/>
        <Principal />
       
        <About />
        <Teachers />
        <Achivements />
        <MovingGallery />
        <Footer />
    </div>
  )
}

export default Home