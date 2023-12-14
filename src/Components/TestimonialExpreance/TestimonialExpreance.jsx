import React, { useState } from 'react';
import img from '../../assets/Images/programming-icon/html.png'
import img1 from '../../assets/Images/programming-icon/css.png'
import { RiQuoteText, RiTeamFill } from "react-icons/ri";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { MdFeedback } from "react-icons/md";
import { FaHandsHelping, FaUserGraduate } from "react-icons/fa";

import "./TestimonialExpreance.css"
import AutoCounterUp from '../Animation/AutoCounterUp';
const testimonials_data = [
  {
    id: 1,
    image: img,
    title: 'Web Design',
    author: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
  },
  {
    id: 2,
    image: img1,
    title: 'Web Development',
    author: 'Jane Smith',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.',
  },
  // Add more testimonials as needed
];

const TestimonialExperience = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials_data.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials_data.length) % testimonials_data.length);
  };

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-6 mb-4 mb-sm-0">
        <div className="testimonial w-100">
          <div className="testimonial-content">
            <div className="testimonial-icon">
              <i><RiQuoteText /></i>
            </div>
            <h3 className="title">{testimonials_data[currentTestimonial].author}</h3>
            <span className="post mb-2">{testimonials_data[currentTestimonial].title}</span>
            <p className="description">{testimonials_data[currentTestimonial].text}</p>
          </div>
        </div>
        <div className="slider-controls">
          <button className='test__btn me-1' onClick={handlePrev}><GrCaretPrevious /></button>
          <button className='test__btn ms-1' onClick={handleNext}><GrCaretNext /></button>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-5">
        <div class="row justify-content-between">
          <div class="col-6">
            <div className="counter__box mb-4">
              <div className="counter__body">
                <i className="count__icon"><FaUserGraduate /></i>
                <h6 className="counter">{<AutoCounterUp start={0} end={2} duration={5} />}+</h6>
                <h5 className="counter__title">Experience</h5>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div className="counter__box mb-4">
              <div className="counter__body">
                <i className="count__icon"><MdFeedback /></i>
                <h6 className="counter">{<AutoCounterUp start={0} end={10} duration={5} />}+</h6>
                <h5 className="counter__title">Project</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-6">
            <div className="counter__box mb-4">
              <div className="counter__body">
                <i className="count__icon"><FaHandsHelping /></i>
                <h6 className="counter">{<AutoCounterUp start={0} end={5} duration={5} />}+</h6>
                <h5 className="counter__title">Clients</h5>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div className="counter__box mb-4">
              <div className="counter__body">
                <i className="count__icon"><RiTeamFill /></i>
                <h6 className="counter">{<AutoCounterUp start={0} end={10} duration={5} />}+</h6>
                <h5 className="counter__title">FeedBack</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialExperience;
