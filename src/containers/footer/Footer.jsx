import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading" data-aos="fade-down"
     data-aos-offset="300"
     data-aos-delay="300"
     data-aos-easing="ease-in-sine">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn" data-aos="zoom-out"
     data-aos-offset="300"
     data-aos-delay="300"
     data-aos-easing="ease-in-sine">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo" data-aos="fade-down"
     data-aos-offset="300"
     data-aos-delay="300"
     data-aos-easing="ease-in-sine">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Copyright@, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div" data-aos="fade-up"
     data-aos-offset="300"
     data-aos-delay="300"
     data-aos-easing="ease-in-sine">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div" data-aos="fade-down"
     data-aos-offset="300"
     data-aos-delay="300"
     data-aos-easing="ease-in-sine">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div" data-aos="fade-up"
     data-aos-offset="300"
     data-aos-delay="300"
     data-aos-easing="ease-in-sine">
        <h4>Get in touch</h4>
        <p>Chitkara University</p>
        <p>9416-XXX-XXx</p>
        <p>yakshit@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright" data-aos="zoom-in"
     data-aos-offset="300"
     data-aos-delay="300"
     data-aos-easing="ease-in-sine">
      <p>@2023 YAKSHIT. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
