import React, { Component, useEffect } from 'react';
import '../css/MusicBtn.css'

class MusicBtn extends Component {

  constructor() {
    super()
  
    this.state = {
       isMute: true 
    };
    this.url = process.env.PUBLIC_URL + '/asset/bg.mp3';
    this.audio = new Audio(this.url);
    this.audio.loop = true;
  }
  
  changeIsMute(){
    this.setState({
      isMute: !this.state.isMute
    },
      () => {
        console.log(this.state.isMute);
        this.state.isMute ? this.audio.pause() : this.audio.play(); 
      }
    )

  }

  render() {
    return (
      <div className='container'>
        <p>To elevate the experience click this!</p>
        <input type="checkbox" id="checkboxInput" onClick={ () => this.changeIsMute() }/>
        <label htmlFor="checkboxInput" className="toggleSwitch">
         <div className="speaker">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75" stroke="#fff" strokeWidth="5">
              <path d="m39,14-17,15H6V48H22l17,15z" fill="#fff" strokeLinejoin="round" />
              <path d="m49,26 20,24m0-24-20,24" fill="#fff" strokeLinecap="round" />
            </svg>
          </div>

          <div className="mute-speaker">
             <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75">
              <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style={{ stroke: '#fff', strokeWidth: 5, strokeLinejoin: 'round', fill: '#fff' }} />
              <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style={{ fill: 'none', stroke: '#fff', strokeWidth: 5, strokeLinecap: 'round' }} />
            </svg>
          </div>
        </label>
      </div>
    );
  }
}

export default MusicBtn;
