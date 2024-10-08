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

          <Projects year="2023" title="TagMyHerd" img={process.env.PUBLIC_URL + '/asset/RFID.png'} tags="Laravel, PHP, Tailwind, Ajax, RFID, Python"> 
          I developed an online inventory system for a capstone project titled "TagMyHerd: RFID Based Recording System for Goats and Sheep Towards a Smart Livestock Farm." This system, designed specifically for goats and sheep, incorporates RFID technology to facilitate the effortless input and tracking of activity data for different batches of livestock, simplifying the overall management process
          </Projects>

          <Projects year="2023" title="Rotten Popcorn" img={process.env.PUBLIC_URL + '/asset/rotten.png'} tags="Laravel, PHP, Tailwind, Ajax"> 
          Rotten Popcorn is an exciting online hub for movie lovers to immerse themselves in the world of cinema. Here, you can rate, review, and delve into lively discussions about your favorite films. With a user-friendly interface, Rotten Popcorn encourages you to share your unique perspectives through detailed reviews and ratings, fostering a vibrant community of film enthusiasts. Explore an extensive library of movies, read insightful comments from fellow cinephiles, and add your own thoughts on the latest blockbusters or timeless classics. Whether you’re hunting for recommendations or eager to share your cinematic journey, Rotten Popcorn is your ultimate destination for all things movies.
          </Projects>

          <Projects year="2023" title="Traffic Management System" img={process.env.PUBLIC_URL + '/asset/traffic.png'} tags="Laravel, PHP, Tailwind, Responsive"> 
          My first Laravel project, the Traffic Management System, is a testament to innovation and problem-solving. This web application doesn't just monitor the number of active COVID cases but takes it a step further by dynamically rerouting traffic when danger arises. By seamlessly blending technology and public safety, this project showcases my commitment to creating solutions that have a real impact on society. It marks the beginning of my journey into Laravel development and represents the potential for technology to shape a safer and more efficient world.
          </Projects>

  
          <Projects year="2022" title="Vaccination Management System" img={process.env.PUBLIC_URL + '/asset/vms.png'} tags="Bootstrap, PHP, Scrum Agile"> 
          I developed a vaccination management system for Oceans of Knowledge School, allowing for the verification of student vaccination status. This system grants the principal access to and management capabilities for vaccination data, ensuring a comprehensive and organized approach to health records within the school community
          </Projects>


          <Projects year="2021-2022" title="Midterm Project (Tick.It)" img={process.env.PUBLIC_URL + '/asset/tickit.png'} tags="HTML, CSS, Bootstrap, Javascript"> 
          Introducing TickIt, your go-to movie ticket reservation website that transforms your cinema outings into unforgettable experiences. With TickIt, booking tickets for the latest blockbuster has never been easier. But we don't stop there—our platform offers an array of enticing add-ons, from buttery popcorn to sizzling hotdogs, to enhance your movie night. Stay updated with the freshest film releases, ensuring you're always in the know about what's playing. TickIt combines convenience and entertainment, redefining the way you enjoy movies. Reserve your seats, customize your experience, and get ready for a cinema adventure like no other, all courtesy of TickIt!
          </Projects>

          <Projects year="2020-2021" title="Blender" img={process.env.PUBLIC_URL + '/asset/blender.png'} tags="Blender, 3d Modeling, Donut"> 
          My Blender project represents a captivating fusion of artistry and technology. Through meticulous 3D modeling, intricate texturing, and skillful animation, I've brought a vision to life. Whether it's a stunning architectural visualization, a lifelike character, or an immersive digital environment, this project showcases my creative prowess and technical finesse. Blender's versatile toolkit has allowed me to explore a realm where imagination knows no bounds, pushing the boundaries of what's possible in the realm of digital art and design.
          </Projects>

          <Projects year="2020-2021" title="First Personal Website" img={process.env.PUBLIC_URL + '/asset/first_personal_website.png'} tags="HTML, CSS, Javascript"> 
          My first personal website serves as a charming time capsule to my early days as a web enthusiast, where I ventured into the realm of HTML, CSS, and JavaScript with boundless curiosity and a passion for learning. This website, a product of my "newbie" phase, reflects the humble beginnings of my journey into web development. Its simplicity speaks volumes about my eagerness to grasp the fundamentals of these technologies. While it may lack the complexity of more advanced projects, my first website represents a pivotal starting point, a digital canvas where I sketched my first strokes of code and began crafting my online identity. It's a testament to how far I've come and a reminder of the excitement that comes with every step of progress in the world of web development.
          </Projects>

          <Projects year="2021-2022" title="First Web Application" img={process.env.PUBLIC_URL + '/asset/mixer.png'} tags="HTML, Bootstrap, Django, MySQL, Python, Flask"> 
          "My Mixer" is not just my first web application; it's a milestone in my journey into the world of full-stack web development. Developed as the culmination of the CS50 course, this project showcases my prowess in web development using Flask for the backend. With "My Mixer," I've created a dynamic and interactive social media-like platform where users can post messages, add friends, and engage with content through likes and more. This project represents a significant leap in my programming skills, as I ventured into both front-end and back-end development, tackling complex challenges while crafting an engaging user experience. "My Mixer" is not just an application; it's a testament to my growth and passion for creating web solutions that connect people and ideas in the digital realm.
          </Projects>

          <Projects year="2019-2021" title="Photoshop" img={process.env.PUBLIC_URL + '/asset/photoshop.png'} tags="Photoshop, Image Manipulation, Editing"> 
          My Photoshop projects encompass a spectrum of creative endeavors, from mastering the art of basic photo editing to venturing into the world of photo manipulation. These projects have been instrumental in honing my skills and understanding the fundamentals of photo editing. Through them, I've learned to enhance images, correct imperfections, and craft stunning visual compositions. This journey has not only empowered me with essential editing techniques but also ignited my passion for the artistry that lies within each photograph. These projects serve as stepping stones in my quest to unlock the full potential of visual storytelling and image enhancement.
          </Projects>

          <Projects year="2021-2022" title="Wordpress" img={process.env.PUBLIC_URL + '/asset/wordpress.png'} tags="Website, Drag N Drop, User Friendly"> 
          My WordPress project represents a pivotal stepping stone in my web development journey. As my second personal website, it signifies my growth and transition into the dynamic world of content management systems. Through WordPress, I've harnessed the power of intuitive website creation and management. This project has not only equipped me with valuable skills in web development but has also expanded my capabilities in designing and maintaining an online presence. It stands as a testament to my commitment to learning and an exciting prelude to the limitless possibilities that lie ahead in the realm of web development.
          </Projects>


          
          
          
      </div>

    </div>
  )
}

export default ProjectPage
