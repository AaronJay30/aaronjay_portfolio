import React, { useEffect, useState } from 'react'
import '../css/HeroPage.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroPage() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  const subtitles = ['Prototyper', 'Guitarist', 'Adventurous', 'Notorious', 'Lover' ,'Gamer'];
  const [currentSubtitlesIndex, setCurrentSubtitlesIndex] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [blinkingLineVisible, setBlinkingLineVisible] = useState(true);

  useEffect(() => {
    const updateSubtitle = () => {
      const subtitle = subtitles[currentSubtitlesIndex];
      if (currentLetterIndex < subtitle.length) {
        setCurrentSubtitle(subtitle.substring(0, currentLetterIndex + 1));
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentLetterIndex(0);
          setCurrentSubtitlesIndex((currentSubtitlesIndex + 1) % subtitles.length);
          setCurrentSubtitle('');
        }, 1000);
      }
    };

    const blinkingLineInterval = setInterval(() => {
      setBlinkingLineVisible((prevVisible) => !prevVisible);
    }, 500);

    const animationInterval = setInterval(updateSubtitle, 100);

    return () => {
      clearInterval(animationInterval);
      clearInterval(blinkingLineInterval);
    };
  }, [currentSubtitlesIndex, currentLetterIndex]);

  return (
    <div className='hero'>
      <div className='hero__content' data-aos='faded-right' data-aos-duration='10000'>
        <span className='hero__content--name'>Aaron Jay Gabato</span>
        <div className='hero__content--title-holder'>
          <h1 className='hero__content--title'>Developer</h1>
          <div className='hero__content--title-line'></div>
        </div>
        <h1 className='hero__content--subtitle'>
          + <span className='enter'>{currentSubtitle}</span>
          <span className={`blinking-line ${blinkingLineVisible ? 'visible' : 'hidden'}`}></span>
        </h1>
      </div>
      <div className="hero__earth">
        <a href='https://www.youtube.com/watch?v=21X5lGlDOfg' target='_blank'>
          <img src={process.env.PUBLIC_URL + '/asset/globe.gif'} alt='Earth_Spinning' />
        </a>
      </div>
    </div>
  );
}

export default HeroPage;
