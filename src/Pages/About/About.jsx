import Layout from '../../Layout/Layout'
import { Link } from "react-router-dom"
// skills icon
import Html from '../../assets/Images/programming-icon/html.svg'
import Javascrpt from '../../assets/Images/programming-icon/javascript.svg'
import Bootstrap from '../../assets/Images/programming-icon/bootstrap.svg'
import Tailwind from '../../assets/Images/programming-icon/tailwind-css.svg'
import React from '../../assets/Images/programming-icon/react.svg'
import Jquery from '../../assets/Images/programming-icon/jquery.svg'

import Php from '../../assets/Images/programming-icon/php-48.png'
import Laravel from '../../assets/Images/programming-icon/laravel-64.png'
import Mysql from '../../assets/Images/programming-icon/mysql.svg'
import Nodejs from '../../assets/Images/programming-icon/nodejs.svg'
import Express from '../../assets/Images/programming-icon/express-js.svg'
import Sanity from '../../assets/Images/programming-icon/sanity.png'
import Mongodb from '../../assets/Images/programming-icon/mongodb.svg'

import Git from '../../assets/Images/programming-icon/git.svg'
import VSCode from '../../assets/Images/programming-icon/visual-studio.svg'
import Netlify from '../../assets/Images/programming-icon/netlify.png'
import Photoshop from '../../assets/Images/programming-icon/adobe-photoshop.svg'
import Figma from '../../assets/Images/programming-icon/figma.svg'
import Wordpress from '../../assets/Images/programming-icon/wordpress.svg'

import image from "../../assets/Images/my-img.jpg"
// components
import "./About.css"
import TestimonialExperience from '../../Components/TestimonialExpreance/TestimonialExpreance'
import TimeGreeting from "../../Components/About/TimeGreeting"
import SectionTitle from '../../Components/SectionTitle/SectionTitle'

const About = () => {
  return (
    <Layout title={"ABOUT PAGE - PORTFOLIO"}>

      <section className='about__me'>
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-4">
              <div className="round-image-container">
                <img src={image} alt='' className="round-image" />
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='testimonial_experience'>
        <div className="container">
          <SectionTitle section_title={"My Experience"} />
          <div className="row justify-content-between py-5">
            <TestimonialExperience />
          </div>
        </div>
      </section>

      <section className='skill__section'>
        <div className="container">
          <SectionTitle section_title={"My Skills"} />
          <div className="row justify-content-center py-5">
            {/* Frontend Skills */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="skill__box">
                <div className="text-center"><h3 className='skill__title'>Front-End</h3></div>
                <div className="skill__list">

                  <div className='skill__name__box'>
                    <img src={Html} className='skill__img' alt="" />
                    <span className='skill__name'>Html-Css</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Javascrpt} className='skill__img' alt="" />
                    <span className='skill__name'>JavaScript</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Bootstrap} className='skill__img' alt="" />
                    <span className='skill__name'>Bootstrap</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Tailwind} className='skill__img' alt="" />
                    <span className='skill__name'>TailwindCss</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={React} className='skill__img' alt="" />
                    <span className='skill__name'>React js</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Jquery} className='skill__img' alt="" />
                    <span className='skill__name'>jQuery</span>
                  </div>

                </div>
              </div>
            </div>
            {/* Backend Skills */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="skill__box">
                <div className="text-center"><h3 className='skill__title'>Back-End</h3></div>
                <div className="skill__list">

                  <div className='skill__name__box'>
                    <img src={Php} className='skill__img' alt="" />
                    <span className='skill__name'>PHP</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Laravel} className='skill__img' alt="" />
                    <span className='skill__name'>Laravel</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Mysql} className='skill__img' alt="" />
                    <span className='skill__name'>MySQL</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Nodejs} className='skill__img' alt="" />
                    <span className='skill__name'>Node Js</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Express} className='skill__img' alt="" />
                    <span className='skill__name'>Express Js</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Sanity} className='skill__img' style={{ width: "20px" }} alt="" />
                    <span className='skill__name'>Sanity</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Mongodb} className='skill__img' alt="" />
                    <span className='skill__name'>MongoDB</span>
                  </div>

                </div>
              </div>
            </div>
            {/* Other Skills */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="skill__box">
                <div className="text-center"><h3 className='skill__title'>Other Skills</h3></div>
                <div className="skill__list">

                  <div className='skill__name__box'>
                    <img src={Git} className='skill__img' alt="" />
                    <span className='skill__name'>GitHub</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={VSCode} className='skill__img' alt="" />
                    <span className='skill__name'>VS Code</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Netlify} className='skill__img' alt="" />
                    <span className='skill__name'>Netlify</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Photoshop} className='skill__img' alt="" />
                    <span className='skill__name'>Adobe Photoshop</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Figma} className='skill__img' alt="" />
                    <span className='skill__name'>Figma</span>
                  </div>
                  <div className='skill__name__box'>
                    <img src={Wordpress} className='skill__img' alt="" />
                    <span className='skill__name'>WordPress</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
    </Layout>
  )
}

export default About