import { FaFileCode } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./ServiceCard.css"
const ServiceCard = () => {
  return (
    <>
      <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-4">
        <div class="service-wrap">
          <div class="service-icon">
            <i><FaFileCode /></i>
          </div>
          <h4 className='service__title'>Website Development</h4>
          <p className='service__text'>Creating visually appealing and functional websites tailored to the client's needs...</p>
          <Link className='service__btn'>Read More</Link>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-4">
        <div class="service-wrap">
          <div class="service-icon">
            <i><FaFileCode /></i>
          </div>
          <h4 className='service__title'>Responsive Web Design</h4>
          <p className='service__text'>Ensuring that websites work seamlessly across various devices and screen sizes...</p>
          <Link className='service__btn'>Read More</Link>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-4">
        <div class="service-wrap">
          <div class="service-icon">
            <i><FaFileCode /></i>
          </div>
          <h4 className='service__title'>React Development</h4>
          <p className='service__text'>Fully Functional and user friendly responsive website developments...</p>
          <Link className='service__btn'>Read More</Link>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-4">
        <div class="service-wrap">
          <div class="service-icon">
            <i><FaFileCode /></i>
          </div>
          <h4 className='service__title'>Front-End Development</h4>
          <p className='service__text'>Building the user interface and user experience using HTML, CSS, and JavaScript...</p>
          <Link className='service__btn'>Read More</Link>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-4">
        <div class="service-wrap">
          <div class="service-icon">
            <i><FaFileCode /></i>
          </div>
          <h4 className='service__title'>Back-End Development</h4>
          <p className='service__text'>Developing the server-side of the website, handling database interactions, and managing server logic...</p>
          <Link className='service__btn'>Read More</Link>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-4">
        <div class="service-wrap">
          <div class="service-icon">
            <i><FaFileCode /></i>
          </div>
          <h4 className='service__title'>E-commerce Website</h4>
          <p className='service__text'>Building online stores, integrating payment gateways, and ensuring secure online transactions...</p>
          <Link className='service__btn'>Read More</Link>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-4">
        <div class="service-wrap">
          <div class="service-icon">
            <i><FaFileCode /></i>
          </div>
          <h4 className='service__title'>(SEO) Optimization</h4>
          <p className='service__text'>Optimizing websites to improve their visibility on search engines and drive organic traffic...</p>
          <Link className='service__btn'>Read More</Link>
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-4">
        <div class="service-wrap">
          <div class="service-icon">
            <i><FaFileCode /></i>
          </div>
          <h4 className='service__title'>Wordpress Website Design</h4>
          <p className='service__text'>Implementing CMS platforms like WordPress for easy content management...</p>
          <Link className='service__btn'>Read More</Link>
        </div>
      </div>
    </>
  )
}

export default ServiceCard