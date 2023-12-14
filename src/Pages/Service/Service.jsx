import Layout from '../../Layout/Layout'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import ServiceCard from '../../Components/Service/ServiceCard'
import "./Service.css"

const Service = () => {
  return (
    <Layout title={"SERVICE PAGE - PORTFOLIO"}>
      <section className='service__section py-5'>
        <div className="container">
          <SectionTitle section_title="My Services" />
          <div className="row">
            <ServiceCard />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Service