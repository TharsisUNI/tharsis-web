import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightToBracket, faChevronDown, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, RadioGroup, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {

  const { t, i18n } = useTranslation("navbar");

  const [lngSelected, setLngSelected] = useState<string>("en");

  const changeLanguage = (lng: string) => {
    if (lng === "en") {
      localStorage.setItem("lng", "en");
    } else if (lng === "es") {
      localStorage.setItem("lng", "es");
    }
  }

  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng);
    changeLanguage(lng);
  }

  useEffect(() => {
    if (!('lng' in localStorage)) {
      setLngSelected("en");
      localStorage.setItem('lng', "en");
      i18n.changeLanguage("en");
    } else {
      if (localStorage.getItem('lng') === "en") {
        setLngSelected("en");
        i18n.changeLanguage("en");
      } else if (localStorage.getItem('lng') === "es") {
        setLngSelected("es");
        i18n.changeLanguage("es");
      }
    }
  }, [i18n]);

  return (
    <div className="w-full border-b">
      <div className="max-w-7xl mx-auto px-16 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-14 text-lg">
          <img
            src="/LOGO-sin-fondo-hd-resized.png"
            className="h-14"
            alt="Logo Tharsis"
          />
          <p>{t("items.home")}</p>
          <p>{t("items.about")}</p>
          <p>{t("items.events")}</p>
          <p>{t("items.community")}</p>
        </div>
        <div className="flex space-x-6">
          <button type="button" className="bg-brand-orange text-white px-4 py-1.5 rounded-lg">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            <span className="ml-2">{t("member-access")}</span>
          </button>
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="flex items-center justify-center py-1.5 lg:py-2 px-2 sm:px-3 space-x-2 focus:outline-none">
                <FontAwesomeIcon icon={faEarthAmericas} />
                <p>{t(`languages.${lngSelected}`)}</p>
                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 z-50 origin-top-right bg-white rounded-lg shadow-lg focus:outline-none">
                <div className="bg-white border rounded-lg bg-opacity-10">
                  <div className="px-2.5 py-2">
                    <Menu.Item as="div">
                      <RadioGroup value={lngSelected} onChange={setLngSelected} >
                        <div className="space-y-1.5 text-sm lg:text-base">
                          <RadioGroup.Option
                            value="en"
                          >
                            {
                              ({ checked }) => (
                                <button type="button" onClick={() => changeLng("en")} className={`${checked ? 'bg-brand-orange text-white font-medium' : ''} px-3 py-1.5 lg:py-1 focus:outline-none rounded-lg flex items-center justify-center space-x-2`}>
                                  <p>{t("languages.en")}</p>
                                  <div className={`${checked ? 'text-white' : 'text-transparent'}`}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                  </div>
                                </button>
                              )
                            }
                          </RadioGroup.Option>
                          <RadioGroup.Option
                            value="es"
                          >
                            {
                              ({ checked }) => (
                                <button type="button" onClick={() => changeLng("es")} className={`${checked ? 'bg-brand-orange text-white font-medium' : ''} px-3 py-1.5 lg:py-1 focus:outline-none rounded-lg flex items-center justify-center space-x-2`}>
                                  <p>{t("languages.es")}</p>
                                  <div className={`${checked ? 'text-white' : 'text-transparent'}`}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                  </div>
                                </button>
                              )
                            }
                          </RadioGroup.Option>
                        </div>
                      </RadioGroup>
                    </Menu.Item>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
