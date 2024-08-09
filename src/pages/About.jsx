import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import aboutus from "../assets/about.avif"
const About = () => {
    const about={
        img:aboutus,
        heading:"About Us",
        para:" Lorem ipsum dolor sit amet consectetur adipisicing elit Nulla hic architecto libero ad perferendis ipsam accusamus, minima facere eius culpa ab vel, aliquam quia, modi labore aperiam ipsum earum amet? Lorem ipsum dolor sit amet consectetur adipisicing elit Nulla hic architecto libero ad perferendis ipsam accusamus, minima facere eius culpa ab vel, aliquam quia, modi labore aperiam ipsum earum amet"
          
    
    }
  return (
  
    <>
   
      <Header/>
      <Hero info={about}/>
      <Footer/>
    </>
  )
}

export default About