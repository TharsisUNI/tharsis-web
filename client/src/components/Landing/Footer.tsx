import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export const Footer = () => {

    return (
        <div className="w-full border-b bg-brand-black">
            <div className="max-w-7xl mx-auto px-16  flex flex-col items-center justify-between h-full">
                <div className="flex justify-between w-full border-b py-5">
                    <div className="flex flex-col justify-between">
                        <div className="w-72 text-white">
                            <img
                                src="/logo_principal_dark_1.png"
                                className="h-20"
                                alt="Logo Tharsis"
                            />
                            <p>We are Tharsis UNI, the team that will participate in the NASA Human Exploration Rover Challenge 2023.</p>
                        </div>
                        <div className="mt-10 text-white">
                            <p>National University of Engineering</p>
                            <p>Lima, Peru</p>
                        </div>
                    </div>
                    <div className="text-white">
                        <p>Project</p>
                        <ul>
                            <li>About</li>
                            <li>Support</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <p>Community</p>
                        <ul>
                            <li>Join up!</li>
                            <li>Events</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <p>Recent news</p>
                        <ul className="underline underline-offset-1">
                            <li>How is the space vehicle designed at UNI that has surprised NASA</li>
                            <li>NASA selects UNI space vehicle among the best 15 designs for global contest</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full py-3">
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