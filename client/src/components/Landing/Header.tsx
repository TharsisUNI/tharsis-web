import { faCircleCheck, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addDoc, collection, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { ChangeEvent, FormEvent, useState } from "react";
import { db } from '../../lib/firebase.config';
import { cryptoManager } from '../../utils/cryptoManager';

export const Header = () => {

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
    setMsgExists(false)
    setIsLoading(true);
    try {
      const q = query(collection(db, "emails"), where("email", "==", email));
      const docSnap = await getDocs(q);
      if (docSnap.empty) {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URI}/sendmail`,
          {
            method: 'POST',
            body: JSON.stringify({
              email,
            }),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': cryptoManager.encryptText(`${import.meta.env.VITE_CLIENT_MAIL_KEY}`),
            },
          }
        );
        const { messageId } = await response.json();
        await addDoc(collection(db, "emails"), {
          email,
          timestamp: serverTimestamp(),
          messageId,
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
    <div className="w-full bg-stone-800">
      <div className="max-w-7xl mx-auto px-16 py-12 flex items-center justify-between">
        <div className="w-full flex relative">
          <div className="flex flex-col max-w-sm text-white space-y-6">
            <p className="text-[2.65rem] font-semibold leading-tight">
              Find out more about the project that will represent{" "}
              <span className="text-red-500">P</span>er
              <span className="text-red-500">u</span> in the HERC
            </p>
            <p className="text-lg">
              Leave us your email and we will keep you up to date on this great
              contest.
            </p>
            <div className="flex flex-col space-y-1">
              <form onSubmit={handleSubmit} className="flex w-full">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  className="rounded-l-lg border border-brand-orange text-brand-orange block flex-1 px-4 py-2 placeholder:text-brand-orange placeholder:opacity-60 focus:outline-none"
                  placeholder="tharsis.uni@gmail.com"
                  required
                />
                <button
                  type="submit"
                  className={`flex items-center justify-center w-20 px-1 text-white ${msgSuccess ? 'bg-green-100' : (msgExists ? 'bg-red-100' : 'bg-brand-orange') } font-medium rounded-r-md border border-brand-orange`}
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
                    msgSuccess ? (
                      <div className="text-green-700">
                        <FontAwesomeIcon icon={faCircleCheck} size="xl" />
                      </div>
                    ) : (
                      msgExists ? (
                        <div className="text-red-700">
                          <FontAwesomeIcon icon={faCircleXmark} size="xl" />
                        </div>
                      ) : (
                        <p>Enviar</p>
                      )
                    )
                  )}
                </button>
              </form>
              {
                msgSuccess ? (
                  <p className="text-sm text-green-500">¡Correo guardado!</p>
                ) : (
                  msgExists ? (
                    <p className="text-sm text-red-500 ">El correo ya se encuentra registrado</p>
                  ) : (
                    <p className="text-sm text-transparent">.</p>
                  )
                )
              }
            </div>
          </div>
          <div className="absolute right-0 -top-6">
            <img src="/rover-borde-blanco-2.png" alt="Rover borde blanco" className="h-[32.5rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};
