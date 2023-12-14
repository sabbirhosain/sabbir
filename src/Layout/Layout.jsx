import { Helmet } from 'react-helmet'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header>
        <Navbar />
      </header>

      <main style={{ padding: "60px 0px" }}>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout