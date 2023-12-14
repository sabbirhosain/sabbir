import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div class="footer border-top pt-3">
        <div class="container text-center py-5">
          <div class="row px-4">
            <div class="col-lg-7 mx-auto">
              <h2 class="footer__name text-uppercase mb-0">Sabbir Hosain </h2>
              <h5 class="footer__title text-primary text-uppercase mb-0 letter-spacing-3">MERN Stack Web Developer</h5>
              <p class="footer__text text-muted my-4">MERN Stack Web Developer and WordPress Them Customization with Elementor Continuous Learning and Effective Problem Solving Expert...!!!</p>
              <ul class="list-inline mb-0">
                <li class="list-inline-item"><a class="social-link" href="#!"><FaFacebookF /></a></li>
                <li class="list-inline-item"><a class="social-link" href="#!"><FaTwitter /></a></li>
                <li class="list-inline-item"><a class="social-link" href="#!"><FaLinkedinIn /></a></li>
                <li class="list-inline-item"><a class="social-link" href="#!"><TbBrandFiverr /></a></li>
                <li class="list-inline-item"><a class="social-link" href="#!"><SiUpwork /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyrights px-4">
          <div class="container py-4 border-top text-center">
            <p class="footer__bottom mb-0 text-muted py-2">All Copyrights &copy; reserved. Development by <a href="#" className='author__name'>Sabbir Hosain</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer