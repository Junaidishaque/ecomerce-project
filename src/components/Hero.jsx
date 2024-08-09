import React from 'react'
const Hero = ({info}) => {
  return (
    <>
<div className='responsive-div'>
    <div >
    <img src={info.img} alt="hero.jpg" className='img'  />
    </div>
    <div>
    <h1>{info.heading}</h1>
    <p>{info.para}</p>
    </div>
    </div>
  </>

  )
}

export default Hero