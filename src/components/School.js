import React from 'react'
import '../css/AboutPage.css'

function School({children, year, school, address, }) {
  return (
    <div className='school'>
        <div className='school-header'>
          <div>
            <h1>{school}</h1>
            <p className='school-add'>{address}</p>  
          </div>
          <span>{year}</span>
        </div>
        <p>{children}</p>
    </div>
  )
}

export default School