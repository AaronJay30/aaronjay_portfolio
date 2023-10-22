import React, { useEffect } from 'react';
import '../css/ProjectPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects({ year, title, img, children, tags = "" }) {
    const tagString = tags;
    let tagsArray = tagString.split(', '); 
    let tagDiv = tagsArray.map((tag, index) => (
        <div key={index} className='tag'>{tag}</div>
    ));
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='project__card' data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <div className='tag-container'>
                <span>Tags: </span>
                <div className='tags'>{tagDiv}</div> {/* Render the array of tagDiv elements */}
            </div>
            <div className='project__card-img'>
                <img src={img} alt='Card Image' />
            </div>
            <div className='project__card-info'>
                <span>{year}</span>
                <h3>{title}</h3>
                <p>{children}</p>
                <button type='button'>More info!</button>
            </div>
        </div>
    );
}

export default Projects;
