import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import contactimg from "../assets/contactimg.jpg"
import Footer from '../components/Footer'
const Contact = () => {
    const contact={
        img:contactimg,
        heading:"Contact Us",
        para:" Lorem ipsum dolor sit amet consectetur adipisicing elit Nulla hic architecto libero ad perferendis ipsam accusamus, minima facere eius culpa ab vel, aliquam quia, modi labore aperiam ipsum earum amet?Lorem ipsum dolor sit amet consectetur adipisicing elit Nulla hic architecto libero ad perferendis ipsam accusamus, minima facere eius culpa ab vel, aliquam quia, modi labore aperiam ipsum earum amet"
          
    
    }
  return (
    <>
      <Header/>
        <Hero  info={contact}/>
        <Footer/>
        </>
  )
}

export default Contact