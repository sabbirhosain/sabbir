import { Link } from "react-router-dom"
import TimeGreeting from "./TimeGreeting"
import image from "../../assets/Images/my-img.jpg"
import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
      <div className="col-md-4">
        <div className="d-flex d-sm-block align-items-center align-items-sm-start justify-content-center justify-content-sm-start py-5 py-sm-0">
          <div className="round-image-container">
            <img src={image} alt='' className="round-image" />
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="about_text">
          <h1>hey, i'm sabbir</h1>
          <p><span className="greeting"><TimeGreeting />,</span> Thank you for this opportunity. My name is Sabbir Hossain and I am doing Diploma from Codertrust Bangladesh. I am proficient in React js and have good knowledge of WordPress. Last summer I interned at XYZ Company as a front-end developer and I really enjoyed my experience there. Since your company is also hiring for similar skills, I believe I am perfect for this role..</p>
          <ul>
            <li><strong>From: </strong> Bangladesh</li>
            <li><strong>Profession: </strong> MERN-Stack Web Developer</li>
            <li><strong>Degree: </strong> Diploma in Web Application Development</li>
            {/* <li><strong>Specialized in: </strong> Adobe Creative Suite (CS)</li> */}
            <li><strong>Specialized in: </strong> Wordpress Theme Customize</li>
          </ul>
          <div className="about-btn"><Link to={"/about"}><span>About More</span><i></i></Link></div>
        </div>
      </div>
    </>
  )
}

export default AboutMe