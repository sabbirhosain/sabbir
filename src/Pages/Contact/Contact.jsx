import Layout from '../../Layout/Layout'
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaShareAlt, FaTwitter } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import './Contact.css'
const Contact = () => {
  return (
    <Layout title={"CONTACT PAGE - PORTFOLIO"}>
      <section id="contact" class="contact my-5">
        <div class="container">
          <SectionTitle section_title='Contact Me' />
          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-md-12">
                  <div class="info-box">
                    <i><FaShareAlt /></i>
                    <h3>Social Media Profiles</h3>
                    <div class="social-links">
                      <a href="https://www.facebook.com/sabbirrahman2002" target='_blank'><FaFacebookF /></a>
                      <a href="#" target='_blank'><FaTwitter /></a>
                      <a href="https://www.linkedin.com/in/sabbirhosain/" target='_blank'><FaLinkedinIn /></a>
                      <a href="https://www.fiverr.com/quick_devlopers" target='_blank'><TbBrandFiverr /></a>
                      <a href="https://www.upwork.com/freelancers/~01b4e9f7c92e5c7d4f" target='_blank'><SiUpwork /></a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i> <FaEnvelope /></i>
                    <h3>Email Me</h3>
                    <p>sabbirhosainbd59@gmail.com</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i><FaPhoneAlt /></i>
                    <h3>Call Me</h3>
                    <p>+880 1793273702</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <form action="" method="post" role="" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>
                <div class="text-center mt-3"><button type="submit" className='btn btn-outline-warning'>Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact