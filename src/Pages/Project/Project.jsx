import ProjectCard from '../../Components/Project/ProjectCard'
import Layout from '../../Layout/Layout'
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import './Project.css'

const Project = () => {
  return (
    <Layout title={"PROJECT PAGE - PORTFOLIO"}>
      <section>
        <div class="form-search form-search-position">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 gutters-19">
                <div class="form-group">
                  <input class="form-control" type="search" placeholder="Enter your keywords.." required />
                </div>
              </div>
              <div class="col-lg-6 gutters-19">
                <div class="row">
                  <div class="col-sm">
                    <div class="form-group">
                      <div class="form-select-custom">
                        <select>
                          <option value disabled selected>Project Categories</option>
                          <option value="8 AM">Portfolio Website</option>
                          <option value="12 PM">Blog Website</option>
                          <option value="12 PM">eCommerce Website</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm gutters-19">
                    <div class="form-group">
                      <div class="form-select-custom">
                        <select>
                          <option value disabled selected>Programing Language</option>
                          <option value="8 AM">HTML-CSS-JAVASCRIPT</option>
                          <option value="12 PM">HTML-CSS-BOOTSTRAP</option>
                          <option value="12 PM">REACT-BOOTSTRAP</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="row">
              <div class="col-sm gutters-19">
                <div class="form-group">
                  <div class="form-select-custom">
                    <select name id>
                      <option value disabled selected>Departure</option>
                      <option value="8 AM">8 AM</option>
                      <option value="12 PM">12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-sm gutters-19">
                <div class="form-group">
                  <div class="form-select-custom">
                    <select name id>
                      <option value disabled selected>Adult</option>
                      <option value="8 AM">8 AM</option>
                      <option value="12 PM">12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-sm gutters-19">
                <div class="form-group">
                  <div class="form-select-custom">
                    <select name id>
                      <option value disabled selected>Child</option>
                      <option value="8 AM">8 AM</option>
                      <option value="12 PM">12 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 gutters-19">
                <div class="form-group">
                  <button class="button button-form" type="submit">Check Availability</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="container-fluid project__item">
        <div className="row">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className='d-flex align-items-center justify-content-center my-5'>
          {/* onClick={() => handlePageChange(page - 1)} disabled={page === 1} */}
          <button className='pagination__btn'><GrCaretPrevious /> &nbsp; Prev</button>
          {/* Page {page} of {totalPages} */}
          <span className='mx-3'>Page 1 of 10</span>
          {/* onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} */}
          <button className='pagination__btn' >Next &nbsp;<GrCaretNext /></button>
        </div>
      </section>
    </Layout>
  )
}

export default Project