import React, { useState, useEffect } from 'react'
import '../App.css'
import '../css/AboutPage.css'
import SkillBar from './SkillBar';
import Experience from './Experience';
import School from './School';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  const [menu, setMenu] = useState("Skill");
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='sample about'>
      <div className='wormHole'>
        <img src='/asset/wormhole.gif' alt='wormhole'></img>
      </div>
      <div className='about__picture' data-aos="fade-up-right">
        <img src='/asset/profile.gif' alt='Profile Picture' id='profile'></img>
      </div>
      <div className='about__content' data-aos="zoom-in" data-aos-duration='500'>
        <h1 className='fillWater'>About Me</h1>
        <p>
        I am Aaron Jay N. Gabato, an 18-year-old resident of Poblacion West, Science City of Munoz, Nueva Ecija, Philippines, born on June 1, 2002. My childhood dream was to follow in my father's footsteps and become an engineer, inspired by his own successful career in the field. However, as time passed, my interests evolved, and I discovered a deep passion for video games, which began with a PlayStation 1 gifted by my father. This love for gaming has remained a constant in my life, ultimately reshaping my aspirations. Now, my goal is to channel my passion for web development into a meaningful career within the industry. This shift reflects my determination to pursue a path that aligns with my true passions and personal growth.        </p>
        <div className='about__subheading'>
          <div className='about__subheading--menu'>
            <ul>
              <li className={menu === "Skill" ? 'active' : ''} onClick={() => setMenu("Skill")}>Skill</li>
              <li className={menu === "Experience" ? 'active' : ''} onClick={() => setMenu("Experience")}>Experience</li>
              <li className={menu === "School" ? 'active' : ''} onClick={() => setMenu("School")}>School</li>
            </ul>
          </div>
          <div className='about__subheading--menu-content'>
            <div className={menu === "Skill" ? 'grid' : 'hidden'}>
              <SkillBar skill="PHP" percentage="78" />
              <SkillBar skill="JAVA" percentage="34" />
              <SkillBar skill="REACT" percentage="46" />
              <SkillBar skill="LARAVEL" percentage="87" />
              <SkillBar skill="PYTHON" percentage="43" />
              <SkillBar skill="C++" percentage="62" />
              <SkillBar skill="GAMING" percentage="84" />
              <SkillBar skill="SINGING" percentage="69" />
            </div>
            <div className={menu !== "Experience" ? 'hidden' : 'experiencePage'}>
              <Experience year='2023' title='Data Encoding @ CLSU OAD'>
              During my 10-day stint at OAD CLSU as a data encoder for the enrollment process, I had the opportunity to play a crucial role in facilitating a smooth and efficient registration experience for students. Working closely with the Records In-Charge (RIC) across various colleges, I contributed to the enrollment process by encoding student data and assisting with subject changes. This experience not only honed my data management skills but also gave me valuable insights into the intricate workings of university administration and student services. It was a rewarding experience, knowing that I played a part in ensuring a successful enrollment period for fellow students.
              </Experience>

              <Experience year='2023' title='IRCITE: IT Marketing'>
                Participating in IRCITE as IT Marketing representatives with our team name "Triumvirate," alongside my classmates Jayne and Ivan, was an invaluable learning experience. Although we didn't secure a victory, the lessons we gained were immeasurable. At Bataan People's Center, we honed our skills in product pitching, marketing plan development, and prototyping as a triumvirate team. This hands-on experience not only broadened our knowledge but also equipped us with practical skills that will serve us well in the dynamic world of IT marketing.
              </Experience>

              <Experience year='2022' title='SAP Analytical Workshop'>
                Participating in the SAP Analytical Workshop conducted by CLSU was a transformative experience for me. As a student, I had the opportunity to sharpen my analytical thinking skills significantly. This workshop not only enriched my knowledge but also equipped me with practical insights into the world of data analysis and SAP software. It was a valuable learning journey that has had a lasting impact on my ability to approach complex problems with a structured and analytical mindset.
              </Experience>

              <Experience year='2021' title='Harvard Online Course: CS50'>
                Completing the free CS50 course on edX was a transformative journey that deepened my understanding of the digital world. This comprehensive program not only equipped me with a solid foundation in computer science but also cultivated problem-solving skills and a new way of thinking. With each lecture, assignment, and project, I delved into the intricacies of programming, algorithms, and data structures. Beyond the technical knowledge gained, CS50 fostered a sense of curiosity and a passion for tackling complex challenges head-on. It's not just a course; it's an empowerment that has opened doors to endless possibilities in the realm of technology and innovation.
              </Experience>


              <Experience year='2019' title='Film Making Competition'>
                During my senior year, I joined a filmmaking competition as the editor for our MNHS SHS team. We secured third place at the regional level, enhancing my editing and creative skills significantly.
              </Experience>
              
              <Experience year="2017-2018" title="TV Broadcasting RSPC">
                During the 2017-2018 academic year, I embarked on a transformative journey as a member of the TV Broadcasting team at Munoz National High School. This experience fueled my passion for video editing, camera operation, and on-air presentation. The pinnacle of this remarkable journey was competing at the Regional School Press Conference (RSPC) in Bataan, an achievement that not only showcased our hard work but also the power of teamwork and dedication in the world of media.system
              </Experience>
            </div>
            <div className={menu !== "School" ? 'hidden' : 'schoolPage'}>
              <School year="2020-currently" school="Central Luzon State University (CLSU)" address='Science City of Muñoz, Nueva Ecija' >
                I am currently enrolled in Central Luzon State University (CLSU), pursuing a degree in Information Technology (IT) since 2020, with an anticipated graduation in 2024.
              </School>
              <School year="2018-2020" school="Munoz National High-School SHS" address='Villa Pinili, Bantug, Science City of Munoz, Nueva Ecija'>
                I successfully completed my Senior High School education at Munoz National High School SHS from 2018 to 2020, earning honors while specializing in the STEM curriculum.
              </School>
              <School year="2014-2018" school="Munoz National High-School MAIN" address='Curva, Bantug, Science City of Munoz, Nueva Ecija'>
                I graduated with honors from Munoz National High School MAIN after completing my Junior High School education from 2014 to 2018.
              </School>
              <School year="2007-2014" school="Munoz Central School" address='Science City of Munoz, Nueva Ecija'>
                I completed my Pre-Elem to Grade 6 education at Munoz Central School from 2007 to 2014, although I graduated without honors due to my lack of motivation to study during that period.
              </School>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage