import img from '../../assets/Images/programming-icon/html.png'
import img1 from '../../assets/Images/programming-icon/css.png'
import { RiQuoteText } from "react-icons/ri";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import "./Testimonial.css"
import { useState } from 'react';

const testimonials_data = [
  {
    id: 1,
    image: img,
    author: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.',
  },
  {
    id: 2,
    image: img1,
    author: 'Jane Smith',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.',
  },
  // Add more testimonials as needed
];


const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials_data.length);
  };
  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials_data.length) % testimonials_data.length);
  };

  return (
    <>
      <div className="row">

        <div className="col-sm-12 col-md-6 col-lg-4 p-0">
          <div className="testimonial">
            <div className="testimonial-content">
              <div className="testimonial-icon">
                <i><RiQuoteText /></i>
              </div>
              <p className="description">{testimonials_data[currentTestimonial].text}</p>
            </div>
            <div>
              <h3 className="title">{testimonials_data[currentTestimonial].author}</h3>
              <span className="post">Web Designer</span>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4 d-none d-sm-block p-0">
          <div className="testimonial">
            <div className="testimonial-content">
              <div className="testimonial-icon">
                <i><RiQuoteText /></i>
              </div>
              <p className="description">{testimonials_data[currentTestimonial].text}</p>
            </div>
            <div>
              <h3 className="title">{testimonials_data[currentTestimonial].author}</h3>
              <span className="post">Web Designer</span>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4 d-none d-lg-block p-0">
          <div className="testimonial">
            <div className="testimonial-content">
              <div className="testimonial-icon">
                <i><RiQuoteText /></i>
              </div>
              <p className="description">{testimonials_data[currentTestimonial].text}</p>
            </div>
            <div>
              <h3 className="title">{testimonials_data[currentTestimonial].author}</h3>
              <span className="post">Web Designer</span>
            </div>
          </div>
        </div>

      </div>
      <div className="slider-controls">
        <button className='test__btn me-1' onClick={handlePrev}><GrCaretPrevious /></button>
        <button className='test__btn ms-1' onClick={handleNext}><GrCaretNext /></button>
      </div>
    </>
  )
}

export default Testimonial