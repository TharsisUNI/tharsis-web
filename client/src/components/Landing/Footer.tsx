import { faFacebookF, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHeart, faRocket} from "@fortawesome/free-solid-svg-icons"

export const Footer = () => {

    return (
        <div className="w-full border-b bg-brand-black">
            <div className="max-w-7xl mx-auto px-16  flex flex-col items-center justify-between h-full">
                <div className="flex justify-between w-full border-b border-opacity-100  py-5 ">
                    <div className="flex flex-col justify-between">
                        <div className="w-72 text-white text-opacity-50">
                            <img
                                src="/logo_principal_dark_1.png"
                                className="h-16"
                                alt="Logo Tharsis"
                            />
                            <p className="mt-3">We are Tharsis UNI, the team that will participate in the NASA Human Exploration Rover Challenge 2023.</p>
                        </div>
                        <div className="mt-7 text-white text-opacity-50">
                            <p>National University of Engineering</p>
                            <p>Lima, Peru</p>
                        </div>
                    </div>
                    <div className="text-white w-36 mt-3">
                        <p className="text-lg">Project</p>
                        <ul className="text-white text-opacity-50 mt-3">
                            <li>
                                <a href="/about">About</a> 
                            </li>
                            <li>
                                <a href="/support" className="flex items-center">
                                    <p className="mr-2">Support</p>
                                    <FontAwesomeIcon icon={faHeart} color="#D92A32"></FontAwesomeIcon>
                                </a> 
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-white w-36 mt-3">
                        <p className="text-lg">Community</p>
                        <ul className="text-brand-orange mt-3">
                            <li>
                                <a href="/member-acces" className="flex items-center">
                                    <p className="mr-2">Join up!</p>
                                    <FontAwesomeIcon icon={faRocket} color="#E8684B"></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a href="/events">Events</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-white w-96 mt-3">
                        <p className="text-lg">Recent news</p>
                        <ul className="underline underline-offset-1 text-white text-opacity-50 mt-3 h-28 flex flex-col justify-between">
                            <li>
                                <a href="https://www.facebook.com/tharsisUNI/posts/pfbid02pA7u8gSwQE88FHb1uNbrANWH8P66uhURapE8e1htAyB4e63oCVzrRFxfosEPvv2hl" target="_blank">
                                How is the space vehicle designed at UNI that has surprised NASA
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/tharsisUNI/posts/pfbid035fuEdE4zQBS8VQSYMs5J2jLPAJUS5u7mE34otr51zHTgPdd1AAPX3aiCXVqQnTcDl" target="_blank">
                                NASA selects UNI space vehicle among the best 15 designs for global contest
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full py-3">
                    <p className="text-white text-opacity-50">© {new Date().getFullYear()} Tharsis UNI</p>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/tharsisUNI" target="_blank">
                            <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center">
                            <FontAwesomeIcon icon={faFacebookF} size="xl" color="white" opacity="0.75"/>
                            </div>
                        </a>
                        <a
                            href="https://www.instagram.com/tharsis.uni/?igshid=YmMyMTA2M2Y%3D"
                            target="_blank"
                        >
                            <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center">
                            <FontAwesomeIcon icon={faInstagram} size="xl" color="white" opacity="0.75"/>
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/tharsis-uni/"
                            target="_blank"
                        >
                            <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center">
                            <FontAwesomeIcon icon={faLinkedinIn} size="xl" color="white" opacity="0.75"/>
                            </div>
                        </a>
                        <a href="https://twitter.com/TharsisUni" target="_blank">
                            <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center">
                            <FontAwesomeIcon icon={faTwitter} size="xl" color="white" opacity="0.75"/>
                            </div>
                        </a>
                        </div>
                </div>
            </div>
        </div>
        
    )
}