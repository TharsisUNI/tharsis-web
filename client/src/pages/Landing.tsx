import { About } from '../components/Landing/About';
import { Header } from "../components/Landing/Header";
import { Navbar } from "../components/Landing/Navbar";

const Landing = () => {
  return (
    <div className="w-full font-ubuntu">
      <Navbar />
      <Header />
      <About />
    </div>
  )
}

export default Landing;