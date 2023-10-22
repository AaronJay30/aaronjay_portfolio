import React from 'react'
import '../css/AboutPage.css'

function Experience({children, year, title}) {
  return (
    <div className='experience'>
        <span>{year}</span>
        <h1>{title}</h1>
        <p>{children}</p>
    </div>
  )
}

export default Experience