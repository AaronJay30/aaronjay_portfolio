import React, { useEffect } from 'react'
import '../css/ContactPage.css'
import InputStyle from './InputStyle'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactPage = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='contact' data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
        <img src={process.env.PUBLIC_URL + '/asset/blackhole-unscreen.gif'} alt='blackhole'></img>
        <div className='contact__container' data-aos="flip-up" data-aos-offset="300" data-aos-duration="700">
          <span>Aaron Jay Gabato</span>
          <h1 className='fillWater'>CALL ME MAYBE?</h1>

          <div className='contact__grid' data-aos="flip-up" data-aos-offset="300" data-aos-duration="700">
            <div className='contact__grid-left' data-aos="fade-left" data-aos-offset="300" data-aos-duration="700">
              <span>Message me!</span>
              <InputStyle type='text' tempHolder='Name'/>
              <InputStyle type='tel' tempHolder='Phone Number'/>
              <InputStyle type='email' tempHolder='Email'/>
              <InputStyle type='textarea' tempHolder='Message'/>
              <button class="button">
                Send Message
              </button>
            </div>
            
          </div>

        </div>
    </div>
  )
}

export default ContactPage