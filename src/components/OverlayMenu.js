import React, { useEffect, useState } from 'react'
import '../css/OverlayMenu.css'
import {LuFacebook} from 'react-icons/lu';
import {RiTwitterXLine, RiTwitchLine} from 'react-icons/ri';
import {RxInstagramLogo} from 'react-icons/rx';
import {FiGithub} from 'react-icons/fi';

function OverlayMenu({ scrollToSection, homeRef, aboutRef, projectRef, contactRef }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight; // Get the height of the viewport
    
      if (window.scrollY >= screenHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `navbar ${scrolled ? 'scrolled' : ''}`;

  return (
    <div className={navbarClasses}>
        <div className='navbar__logo'>
          <span className='fillWater'>AJ</span>
        </div>

        <ul className='navbar__menu'>
          <a href="#" onClick={() => scrollToSection(homeRef)}><li>Home</li></a>
          <a href="#" onClick={() => scrollToSection(aboutRef)}><li>About</li> </a>
          <a href="#" onClick={() => scrollToSection(projectRef)}><li>Project</li> </a>
          <a href="#" onClick={() => scrollToSection(contactRef)}><li>Contact</li> </a>
        </ul>
        <ul className='navbar__socials'>
          <a href="https://www.facebook.com/gabato.aaron30/"><li><LuFacebook /></li></a>
          <a href="https://twitter.com/BobTheMinion30"><li><RiTwitterXLine /></li></a>
          <a href="https://www.instagram.com/Aaaaarondalla/"><li><RxInstagramLogo /></li></a>
          <a href="https://www.twitch.tv/waddlesjs"><li><RiTwitchLine /></li></a>
          <a href="https://github.com/AaronJay30"><li><FiGithub /></li></a>
        </ul>
    </div>
  )
}

export default OverlayMenu;