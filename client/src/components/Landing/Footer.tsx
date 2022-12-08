import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export const Footer = () => {

    return (
        <div className="w-full border-b bg-brand-black">
            <div className="max-w-7xl mx-auto px-16 py-2 flex items-center justify-between">
                <div>
                    <div>
                        Descripcion
                        <img
                            src="/LOGO-sin-fondo-hd-resized.png"
                            className="h-16"
                            alt="Logo Tharsis"
                        />
                    </div>
                    <div>Project</div>
                    <div>Community</div>
                    <div>Recent news</div>
                </div>
                <div className="flex js">
                    <p className="text-white">© {new Date().getFullYear()} Tharsis</p>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/tharsisUNI" target="_blank">
                            <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center">
                            <FontAwesomeIcon icon={faFacebookF} size="xl" color="white" />
                            </div>
                        </a>
                        <a
                            href="https://www.instagram.com/tharsis.uni/?igshid=YmMyMTA2M2Y%3D"
                            target="_blank"
                        >
                            <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center">
                            <FontAwesomeIcon icon={faInstagram} size="xl" color="white" />
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/tharsis-uni/"
                            target="_blank"
                        >
                            <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center">
                            <FontAwesomeIcon icon={faLinkedinIn} size="xl" color="white" />
                            </div>
                        </a>
                        <a href="https://twitter.com/TharsisUni" target="_blank">
                            <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center">
                            <FontAwesomeIcon icon={faTwitter} size="xl" color="white" />
                            </div>
                        </a>
                        </div>
                </div>
            </div>
        </div>
        
    )
}