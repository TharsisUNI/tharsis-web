import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="font-montserrat w-full min-h-screen px-4 py-6">
      <div className="flex flex-col justify-center items-center h-full max-w-2xl mx-auto space-y-5">
        <div>
          <img src="/astronaut.gif" className="h-64" alt="Astronaut animation" />
        </div>
        <div>
          <p className="text-xl font-semibold text-center">Nuestro sitio web está en construcción... ¡Déjanos tu correo y te notificaremos cuando está lista!</p>
        </div>
        <div className="flex max-w-[20rem] w-full">
          <input type="text" className="rounded-l-lg border border-brand-orange text-gray-900 block flex-1 text-sm px-3.5 py-1.5 placeholder:text-brand-orange focus:outline-none" placeholder="tharsis.uni@gmail.com" />
          <button type="button" className="inline-flex items-center px-3 text-sm text-white bg-brand-orange font-medium rounded-r-md border border-brand-orange">
            Enviar
          </button>
        </div>
        <div className="flex space-x-6">
          <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
            <FontAwesomeIcon icon={faFacebookF} size="xl" color="white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
            <FontAwesomeIcon icon={faInstagram} size="xl" color="white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" color="white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
            <FontAwesomeIcon icon={faTwitter} size="xl" color="white" />
          </div>
        </div>
        <div>
          <img src="/LOGO-sin-fondo-hd-resized.png" className="h-16" alt="Logo Tharsis" />
        </div>
        <p className="text-sm font-medium text-gray-600">© 2022 Tharsis</p>
      </div>
    </div>
  )
}

export default App
