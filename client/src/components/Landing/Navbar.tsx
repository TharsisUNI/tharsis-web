import { faArrowRightToBracket, faChevronDown, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = () => {
  return (
    <div className="w-full border-b">
      <div className="max-w-7xl mx-auto px-16 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-14 text-lg">
          <img
            src="/logo_principal_light_1.png"
            className="h-14"
            alt="Logo Tharsis"
          />
          <p>Home</p>
          <p>About</p>
          <p>Events</p>
          <p>Community</p>
        </div>
        <div className="flex space-x-14">
          <button type="button" className="bg-brand-orange text-white px-4 py-1.5 rounded-lg">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            <span className="ml-2">Member access</span>
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faEarthAmericas} />
            <span className="ml-2 mr-1">English</span>
            <FontAwesomeIcon icon={faChevronDown} size="sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
