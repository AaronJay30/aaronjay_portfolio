import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import HeroPage from './components/HeroPage';
import OverlayMenu from './components/OverlayMenu';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import Loader from './components/Loader';
import MusicBtn from './components/MusicBtn';
import ScrollingAnimation from './components/ScrollingAnimation';

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 8000);
  }, []);

  const screenWidth = window.innerWidth;
  const showMessage = screenWidth < 1400;

  return (
    <div>
      {isLoading && !showMessage && <Loader />}
      {!showMessage && <MusicBtn />}
      {!showMessage && (
        <OverlayMenu
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
      )}

      <div ref={homeRef} className={`twinkling sample ${showMessage ? 'hidden' : ''}`}>
        <div className="clouds">
          <HeroPage />
        </div>
      </div>

      <div ref={aboutRef} className={`twinkling sample ${showMessage ? 'hidden' : ''}`}>
        <div className="clouds">
          <ScrollingAnimation inset="140" direction="RTL" />
          <AboutPage />
        </div>
      </div>

      <div ref={projectRef} className={`twinkling sample ${showMessage ? 'hidden' : ''}`}>
        <div className="clouds">
          <ScrollingAnimation inset="1000" direction="LTR" />
          <ProjectPage />
        </div>
      </div>

      <div ref={contactRef} className={`twinkling sample ${showMessage ? 'hidden' : ''}`}>
        <div className="clouds">
          <ContactPage />
        </div>
      </div>

      {showMessage && (
        <div className='responsive_message_container'> 
          <h1 className="responsive_message">
            The developer is still working on the responsiveness.
            Please use your laptop or try the desktop site on mobile to view the website.
          </h1>

          <h2></h2>
        </div>
      )}

      <div className='footer'>
        <div className='footer__info'>
          <div className='footer_info-email'>
            <h1>Email:</h1>
            <span>aaaaarondalla@gmail.com (for business)</span><br/><br/>
            <span>aaronjaygabato30@gmail.com (for personal)</span>
          </div>

          <div className=''>
            <h1>Phone Number:</h1>
            <span>+63945-157-1295</span>
          </div>

          <div className=''>
            <h1>Address:</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d403.7128509264973!2d120.9019080141526!3d15.709528843601106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1695737755841!5m2!1sen!2sph" width="600" height="350" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>   
        <span className=''>© 2023 Nueva Ecija Philippines, Inc. All rights reserved. Buy me a Coffee! ☕</span>
      </div>
    </div>
  );
}

export default App;
