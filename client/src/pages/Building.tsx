import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleCheck,
  faCircleXmark
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where
} from "firebase/firestore";
import { ChangeEvent, FormEvent, useState } from "react";
import { db } from "../lib/firebase.config";

const Building = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [msgSuccess, setMsgSuccess] = useState<boolean>(false);
  const [msgExists, setMsgExists] = useState<boolean>(false);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setMsgExists(false);
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const q = query(collection(db, "emails"), where("email", "==", email));
      const docSnap = await getDocs(q);
      if (docSnap.empty) {
        await addDoc(collection(db, "emails"), {
          email,
          timestamp: serverTimestamp(),
        });
        setEmail("");
        setIsLoading(false);
        setMsgSuccess(true);
        setTimeout(() => {
          setMsgSuccess(false);
        }, 8000);
      } else {
        setIsLoading(false);
        setMsgExists(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-montserrat w-full min-h-screen px-4 py-6">
      <div className="flex flex-col justify-center items-center h-full max-w-2xl mx-auto space-y-5">
        <div>
          <img
            src="/astronaut_2.gif"
            className="h-[17rem]"
            alt="Astronaut animation"
          />
        </div>
        <div>
          <p className="text-xl font-semibold text-center">
            Nuestro sitio web está en construcción... ¡Déjanos tu correo y te
            notificaremos cuando esté listo!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex max-w-[21rem] w-full">
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            className="rounded-l-lg border border-brand-orange text-brand-orange block flex-1 text-sm px-3.5 py-1.5 placeholder:text-brand-orange placeholder:opacity-60 focus:outline-none"
            placeholder="tharsis.uni@gmail.com"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center w-20 px-1 text-sm text-white bg-brand-orange font-medium rounded-r-md border border-brand-orange"
          >
            {isLoading ? (
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <p>Enviar</p>
            )}
          </button>
        </form>
        {msgSuccess ? (
          <div
            className="flex px-4 py-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg space-x-2"
            role="alert"
          >
            <FontAwesomeIcon icon={faCircleCheck} size="xl" />
            <div>
              <span className="font-semibold">¡Correo guardado!</span>
            </div>
          </div>
        ) : (
          <></>
        )}
        {msgExists ? (
          <div
            className="flex px-4 py-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg space-x-2"
            role="alert"
          >
            <FontAwesomeIcon icon={faCircleXmark} size="xl" />
            <div>
              <span className="font-semibold">
                El correo ya se encuentra registrado
              </span>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="flex space-x-6">
          <a href="https://www.facebook.com/tharsisUNI" target="_blank">
            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
              <FontAwesomeIcon icon={faFacebookF} size="xl" color="white" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/tharsis.uni/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
          >
            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
              <FontAwesomeIcon icon={faInstagram} size="xl" color="white" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/tharsis-uni/"
            target="_blank"
          >
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
          <img
            src="/LOGO-sin-fondo-hd-resized.png"
            className="h-16"
            alt="Logo Tharsis"
          />
        </div>
        <p className="text-sm font-medium text-gray-600">
          © {new Date().getFullYear()} Tharsis
        </p>
      </div>
    </div>
  );
};

export default Building;
