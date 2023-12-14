import AutoCounterUp from '../../Components/Animation/AutoCounterUp'
import AutoTyper from '../../Components/Animation/AutoTyper'
import Layout from '../../Layout/Layout'
// hero programing icon image
import Html from '../../assets/Images/programming-icon/html.png'
import Css from '../../assets/Images/programming-icon/css.png'
import Javascript from '../../assets/Images/programming-icon/javascript.png'
import React from '../../assets/Images/programming-icon/react-js.png'
import Php from '../../assets/Images/programming-icon/php.png'
import Laravel from '../../assets/Images/programming-icon/laravel.png'
import MongoDb from '../../assets/Images/programming-icon/mongo-db.png'
// working details icon image
import Work_1 from '../../assets/Images/work-deteils/work-deteils-1.png'
import Work_2 from '../../assets/Images/work-deteils/work-deteils-2.png'
import Work_3 from '../../assets/Images/work-deteils/work-deteils-3.png'
import Work_4 from '../../assets/Images/work-deteils/work-deteils-4.png'
// components
import Testimonial from '../../Components/Testimonial/Testimonial'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import AboutMe from '../../Components/About/AboutMe'
import "./Home.css"
import ServiceCard from '../../Components/Service/ServiceCard'

const Home = () => {
  const programming_icon = [Html, Css, Javascript, React, Php, Laravel, MongoDb];
  return (
    <Layout title={"HOME PAGE - PORTFOLIO"}>

      <section className="image-background container-fluid">
        <div className="container">
          <div className="img-bg-text">
            <h1 className="d-sm-none">World class highest service in Web Developer</h1>
            <h1 className="d-none d-sm-block">World class highest</h1>
            <div className="bg-animition-text">
              <h2 className="d-none d-sm-block">Service in <AutoTyper /></h2>
            </div>
            <div className="skill-icon">
              {
                programming_icon.map(img => <img src={img} key={img} alt="" />)
              }
              <span>15+</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work-deteils mb-5">
        <div className="container">
          <div className="row d-none d-md-flex">
            <div className="col-3 p-0">
              <div className="card work__card">
                <img src={Work_1} className="card-img-top" alt="card-images" />
                <div className="card-body">
                  <h5 className="card-counter">{<AutoCounterUp start={0} end={2} duration={5} />}+</h5>
                  <h5 className="card-title work__card__title">Experience</h5>
                </div>
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="card work__card">
                <img src={Work_4} className="card-img-top" alt="card-images" />
                <div className="card-body">
                  <h5 className="card-counter">{<AutoCounterUp start={0} end={100} duration={5} />}+</h5>
                  <h5 className="card-title work__card__title">Clients</h5>
                </div>
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="card work__card">
                <img src={Work_2} className="card-img-top" alt="card-images" />
                <div className="card-body">
                  <h5 className="card-counter">{<AutoCounterUp start={0} end={130} duration={5} />}+</h5>
                  <h5 className="card-title work__card__title">Projects</h5>
                </div>
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="card work__card">
                <img src={Work_3} className="card-img-top" alt="card-images" />
                <div className="card-body">
                  <h5 className="card-counter">{<AutoCounterUp start={0} end={110} duration={5} />}+</h5>
                  <h5 className="card-title work__card__title">FeedBack</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about__section'>
        <div className="container">
          <div className="row align-items-center py-5">
            <AboutMe />
          </div>
        </div>
      </section>

      <section className='service__section py-5'>
        <div className="container">
          <SectionTitle section_title="My Services" />
          <div className="row">
            <ServiceCard />
          </div>
        </div>
      </section>

      <section className='testiomonial__section'>
        <SectionTitle section_title={"Testiomonial"} />
        <div className="container">
          <Testimonial />
        </div>
      </section>

    </Layout>
  )
}

export default Home