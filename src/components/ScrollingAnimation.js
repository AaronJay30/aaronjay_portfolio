import React, { useEffect, useState } from 'react';
import '../css/ScrollingAnimation.css'; // Create a CSS file for styling


function ScrollingAnimation({inset, direction}) {
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const screenHeight = window.innerHeight;
    let animationDistance = ((scrollY - inset % screenHeight) / screenHeight) * 100;

    return (
      <div className={direction === 'RTL' ? 'scrolling-animation-right' : 'scrolling-animation-left'} style={{ transform: `translateX(${direction === 'RTL' ? '-' : ''}${animationDistance}%)`}}>
            <img src={process.env.PUBLIC_URL + '/asset/interstellar-ship.png'} alt='interstellar ship'></img>
      </div>
    );
  }
  
  export default ScrollingAnimation;
  