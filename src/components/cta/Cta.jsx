import React from 'react'
import './cta.css'
const Cta = () => {
  return (
    <div className="gpt3__cta" >
    <div className="gpt3__cta-content" data-aos="fade-down"
     data-aos-offset="300"
     data-aos-delay="300"
     data-aos-easing="ease-in-sine">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn" data-aos="fade-up"
     data-aos-offset="300"
     data-aos-delay="300"
     data-aos-easing="ease-in-sine">
      <button type="button">Get Started</button>
    </div>
  </div>
  )
}

export default Cta
