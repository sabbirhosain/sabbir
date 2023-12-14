import Testimonial from '../../Components/Testimonial/Testimonial'
import Layout from '../../Layout/Layout'

const Details = () => {
  return (
    <Layout title={"DETAILS PAGE - PORTFOLIO"}>
      <>



        {/* testiomonial section */}
        <section className='testiomonial__section'>
          <div className="container">
            <Testimonial />
          </div>
        </section>

      </>
    </Layout>
  )
}

export default Details