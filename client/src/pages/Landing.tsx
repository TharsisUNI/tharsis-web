import { About } from '../components/Landing/About';
import { Header } from "../components/Landing/Header";
import { Footer } from "../components/Landing/Footer";
import { Navbar } from "../components/Landing/Navbar";

const Landing = () => {
  return (
    <div className="w-full font-ubuntu">
      <Navbar />
      <Header />
      <About />
      {/* <Navbar /> */}
      <p> Otras secciones</p>
      <Footer />
    </div>
  )
}

export default Landing;