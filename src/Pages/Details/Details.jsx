import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import demo from '../../assets/Images/portfolio-demo.png'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import Testimonial from '../../Components/Testimonial/Testimonial'
import './Details.css'
const Details = () => {

  return (
    < Layout title={"DETAILS - PORTFOLIO"} >
      <div className="content">

        <section className='breadcrumb'>
          <div className="container">
            <div className="row align-items-center justify-content-between text-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-center text-sm-start">
                <h5 className="float-sm-left mb-3 mb-sm-0 text-light">Project Details</h5>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-center text-sm-end">
                <ul className="bread-list m-0">
                  <li className="breadcrumb-item d-inline"><Link to={'/'} className='breadcrumb__link'>Home</Link></li>
                  <li className="breadcrumb-item d-inline"><Link to={'project'} className='breadcrumb__link'>Project</Link></li>
                  <li className="breadcrumb-item d-inline active">Details</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='project__overview my-5'>
          <div className="container">
            <div className="row justify-content-between pt-5">
              <div className="col-sm-8">
                <div className='Project__image__box'>
                  <img src={demo} className='img-fluid Project__image' alt="" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="overview mt-3 mt-sm-0">
                  <h5 className='project__info'>Project Information</h5>
                  <div className="devider"></div>
                  <ul>
                    <li className='mb-2'><strong>Category : </strong> Web Design</li>
                    <li className='mb-2'><strong>Client : </strong> United State</li>
                    <li className='mb-2'><strong>Review : </strong>
                      <i style={{ color: 'gold' }}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
                    </li>
                    <li className='mb-2'><strong>Project Date : </strong> 01 jan 2023</li>
                    <li><strong>Project URL : </strong><a href="#" target='_blank'> www.example.com</a></li>
                  </ul>
                  <h5 className='project__info mt-5'>Project Language</h5>
                  <div className="devider"></div>
                  <div className='details__lang mt-3'>
                    <span className='pro__lang d-inline-block'>HTML-CSS</span>
                    <span className='pro__lang d-inline-block'>JavaScript</span>
                    <span className='pro__lang d-inline-block'>Bootstrap</span>
                    <span className='pro__lang d-inline-block'>React js</span>
                    <span className='pro__lang d-inline-block'>jQuery</span>
                    <span className='pro__lang d-inline-block'>PSD to HTML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='category'>
          <div className="container my-5">
            <SectionTitle section_title="Client Testimonial" />
            <Testimonial />
          </div>
        </section>

      </div>
    </Layout >
  )
}

export default Details