import { Events } from '../components/Landing/Events';
import { Footer } from "../components/Landing/Footer";
import { Header } from "../components/Landing/Header";
import { Navbar } from "../components/Landing/Navbar";

const Landing = () => {
  return (
    <div className="w-full font-ubuntu">
      <Navbar />
      <Header />
      <Events />
      <Footer />
    </div>
  )
}

export default Landing;