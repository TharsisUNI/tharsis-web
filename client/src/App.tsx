import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

function App() {

  const añoActual = new Date().getFullYear();

  return (
    <div className="font-montserrat w-full min-h-screen px-4 py-6">
      <div className="flex flex-col justify-center items-center h-full max-w-2xl mx-auto space-y-5">
        <div>
          <img src="/astronaut_2.gif" className="h-[18rem]" alt="Astronaut animation" />
        </div>
        <div>
          <p className="text-xl font-semibold text-center">Nuestro sitio web está en construcción... ¡Déjanos tu correo y te notificaremos cuando esté listo!</p>
        </div>
        <div className="flex max-w-[20rem] w-full">
          <input type="text" className="rounded-l-lg border border-brand-orange text-brand-orange block flex-1 text-sm px-3.5 py-1.5 placeholder:text-brand-orange placeholder:opacity-60 focus:outline-none" placeholder="tharsis.uni@gmail.com" />
          <button type="button" className="inline-flex items-center px-3 text-sm text-white bg-brand-orange font-medium rounded-r-md border border-brand-orange">
            Enviar
          </button>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.facebook.com/tharsisUNI" target="_blank">
            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
              <FontAwesomeIcon icon={faFacebookF} size="xl" color="white" />
            </div>
          </a>
          <a href="https://www.instagram.com/tharsis.uni/?igshid=YmMyMTA2M2Y%3D" target="_blank">
            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
              <FontAwesomeIcon icon={faInstagram} size="xl" color="white" />
            </div>
          </a>
          <a href="https://www.linkedin.com/company/tharsis-uni/" target="_blank">
            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" color="white" />
            </div>
          </a>
          <a href="https://twitter.com/TharsisUni" target="_blank">
            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
              <FontAwesomeIcon icon={faTwitter} size="xl" color="white" />
            </div>
          </a>
        </div>
        <div>
          <img src="/LOGO-sin-fondo-hd-resized.png" className="h-16" alt="Logo Tharsis" />
        </div>
        <p className="text-sm font-medium text-gray-600">© {añoActual} Tharsis</p>
      </div>
    </div>
  )
}

export default App
