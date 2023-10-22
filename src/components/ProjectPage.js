import React, { useEffect } from 'react'
import '../css/ProjectPage.css'
import '../App.css'
import Projects from './Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectPage = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='project'>
      <h1 className='fillWater'>My Projects</h1>
      <div className='project__card_container'>

          <Projects year="2023" title="Traffic Management System" img="/asset/traffic.png" tags="Laravel, PHP, Tailwind, Responsive"> 
          My first Laravel project, the Traffic Management System, is a testament to innovation and problem-solving. This web application doesn't just monitor the number of active COVID cases but takes it a step further by dynamically rerouting traffic when danger arises. By seamlessly blending technology and public safety, this project showcases my commitment to creating solutions that have a real impact on society. It marks the beginning of my journey into Laravel development and represents the potential for technology to shape a safer and more efficient world.
          </Projects>

          <Projects year="2021-2022" title="Midterm Project (Tick.It)" img="/asset/tickit.png" tags="HTML, CSS, Bootstrap, Javascript"> 
          Introducing TickIt, your go-to movie ticket reservation website that transforms your cinema outings into unforgettable experiences. With TickIt, booking tickets for the latest blockbuster has never been easier. But we don't stop there—our platform offers an array of enticing add-ons, from buttery popcorn to sizzling hotdogs, to enhance your movie night. Stay updated with the freshest film releases, ensuring you're always in the know about what's playing. TickIt combines convenience and entertainment, redefining the way you enjoy movies. Reserve your seats, customize your experience, and get ready for a cinema adventure like no other, all courtesy of TickIt!
          </Projects>

          <Projects year="2020-2021" title="Blender" img="/asset/blender.png" tags="Blender, 3d Modeling, Donut"> 
          My Blender project represents a captivating fusion of artistry and technology. Through meticulous 3D modeling, intricate texturing, and skillful animation, I've brought a vision to life. Whether it's a stunning architectural visualization, a lifelike character, or an immersive digital environment, this project showcases my creative prowess and technical finesse. Blender's versatile toolkit has allowed me to explore a realm where imagination knows no bounds, pushing the boundaries of what's possible in the realm of digital art and design.
          </Projects>

          <Projects year="2020-2021" title="First Personal Website" img="/asset/first_personal_website.png" tags="HTML, CSS, Javascript"> 
          My first personal website serves as a charming time capsule to my early days as a web enthusiast, where I ventured into the realm of HTML, CSS, and JavaScript with boundless curiosity and a passion for learning. This website, a product of my "newbie" phase, reflects the humble beginnings of my journey into web development. Its simplicity speaks volumes about my eagerness to grasp the fundamentals of these technologies. While it may lack the complexity of more advanced projects, my first website represents a pivotal starting point, a digital canvas where I sketched my first strokes of code and began crafting my online identity. It's a testament to how far I've come and a reminder of the excitement that comes with every step of progress in the world of web development.
          </Projects>

          <Projects year="2021-2022" title="First Web Application" img="/asset/mixer.png" tags="HTML, Bootstrap, Django, MySQL, Python, Flask"> 
          "My Mixer" is not just my first web application; it's a milestone in my journey into the world of full-stack web development. Developed as the culmination of the CS50 course, this project showcases my prowess in web development using Flask for the backend. With "My Mixer," I've created a dynamic and interactive social media-like platform where users can post messages, add friends, and engage with content through likes and more. This project represents a significant leap in my programming skills, as I ventured into both front-end and back-end development, tackling complex challenges while crafting an engaging user experience. "My Mixer" is not just an application; it's a testament to my growth and passion for creating web solutions that connect people and ideas in the digital realm.
          </Projects>

          <Projects year="2019-2021" title="Photoshop" img="/asset/photoshop.png" tags="Photoshop, Image Manipulation, Editing"> 
          My Photoshop projects encompass a spectrum of creative endeavors, from mastering the art of basic photo editing to venturing into the world of photo manipulation. These projects have been instrumental in honing my skills and understanding the fundamentals of photo editing. Through them, I've learned to enhance images, correct imperfections, and craft stunning visual compositions. This journey has not only empowered me with essential editing techniques but also ignited my passion for the artistry that lies within each photograph. These projects serve as stepping stones in my quest to unlock the full potential of visual storytelling and image enhancement.
          </Projects>

          <Projects year="2021-2022" title="Wordpress" img="/asset/wordpress.png" tags="Website, Drag N Drop, User Friendly"> 
          My WordPress project represents a pivotal stepping stone in my web development journey. As my second personal website, it signifies my growth and transition into the dynamic world of content management systems. Through WordPress, I've harnessed the power of intuitive website creation and management. This project has not only equipped me with valuable skills in web development but has also expanded my capabilities in designing and maintaining an online presence. It stands as a testament to my commitment to learning and an exciting prelude to the limitless possibilities that lie ahead in the realm of web development.
          </Projects>


          
          
          
      </div>

    </div>
  )
}

export default ProjectPage