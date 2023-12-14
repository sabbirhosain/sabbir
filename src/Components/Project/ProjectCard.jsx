import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Image from '../../assets/Images/sample.jpg'
import './ProjectCard.css'
const ProjectCard = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 p-2">
      <div class="card" style={{ width: "100%" }}>
        <img src={Image} class="img-fluid" alt="..." />
        <div class="card-body">
          <Link to={'/details/123'} class="card__title">Landing Page Design</Link>
          <div className='project__lang'>
            <span className='lang d-inline-block'>HTML-CSS</span>
            <span className='lang d-inline-block'>JavaScript</span>
            <span className='lang d-inline-block'>Bootstrap</span>
            <span className='lang d-inline-block'>React js</span>
            <span className='lang d-inline-block'>jQuery</span>
            <span className='lang d-inline-block'>PSD to HTML</span>
          </div>
        </div>
        <div class="botton__box">
          <Link to={'/details/123'} href="#" class="card__button">READ MORE</Link>
          <div className='socail__box'>
            <span class="card__socail me-1"><FaHeart /></span>
            <a href="http://www.google.com" target='_blank' class="card__socail ms-1"><CiShare2 /></a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProjectCard