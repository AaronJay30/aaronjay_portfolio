import React from 'react'
import '../css/AboutPage.css'

function SkillBar({skill, percentage}) {

    const percentageStyle = {
        width: `${percentage}%`,
        backgroundColor: "#0087ca",
        height: '100%',
        borderRadius: '20px',
        boxShadow: 'inset 0 0 10px #0000006b',

    };
    
    const percentBg = {
        backgroundColor: 'white',
        margin: '15px',
        borderRadius: '20px',
        boxShadow: 'inset 0 0 5px #0087ca',

    }
      

  return (
    <div className='col-span-1 gridSkill' >
        <h4 className='col-span-1'>{skill}</h4>
        <div className='col-span-4' style={percentBg}>
            <div style={percentageStyle}>
                <span>{percentage}%</span>
            </div>
        </div>
    </div>
  )
}

export default SkillBar