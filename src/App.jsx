import Logo from './components/Logo.jsx'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import Products from './components/Products.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <div>
      <section className="header">
        <div className='header-item-left'>
          <Logo />
        </div>
        <div className='header-item-right'>
          <Navbar/>
        </div>
      </section>

      <section className='content'>
        <Banner />
        <Products />
      </section>

      <section className='footer'>
        <Footer />
      </section>
    </div>
  )
}

export default App
