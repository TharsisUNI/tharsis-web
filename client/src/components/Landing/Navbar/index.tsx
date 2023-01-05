import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MenuBurger } from './MenuBurger';
import { MenuLanguage } from './MenuLanguage';

export const Navbar = () => {

  const { t, i18n } = useTranslation("navbar");

  const [isOpen, toggleOpen] = useCycle<boolean>(false, true);

  return (
    <nav className="w-full border-b sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-14 text-lg">
          <div>
            <img
              src="/logo_principal_light_1.png"
              className="h-12 md:h-14"
              alt="Logo Tharsis"
            />
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-14">
              <p>{t("items.home")}</p>
              <p>{t("items.about")}</p>
              <p>{t("items.events")}</p>
              <p>{t("items.community")}</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-3 md:space-x-6">
          <button type="button" className="bg-brand-orange text-white px-4 py-1.5 rounded-lg hidden md:block">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            <span className="ml-2">{t("member-access")}</span>
          </button>
          <MenuLanguage i18n={i18n} t={t} />
          <div className="flex items-center md:hidden">
            <motion.nav
              initial={false}
              animate={ isOpen ? "open" : "closed" }
            >
              <MenuBurger toggle={() => toggleOpen()} />
            </motion.nav>
          </div>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          initial={false}
          transition={{ type: "spring" }}
          animate={ isOpen ? "open" : "closed" }
          variants={{
            closed: { opacity: 0, display: "none" },
            open: { opacity: 1, display: "block" },
          }}
          exit={{ opacity: 0, display: "none" }}
          className="absolute w-full shadow-xl md:hidden bg-gray-50"
        >
          <div className="px-3 sm:px-4 py-3 space-y-2">
            <p className="px-2.5 py-1">{t("items.home")}</p>
            <p className="px-2.5 py-1">{t("items.about")}</p>
            <p className="px-2.5 py-1">{t("items.events")}</p>
            <p className="px-2.5 py-1">{t("items.community")}</p>
            <p className="bg-brand-orange text-white px-2.5 py-2 rounded-md">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              <span className="ml-2.5">{t("member-access")}</span>
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
}
