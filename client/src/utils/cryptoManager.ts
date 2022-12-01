import CryptoJS from "crypto-js";

export const cryptoManager = {
  encryptText: (text: string): string => {
    return CryptoJS.AES.encrypt(text, `${import.meta.env.VITE_ENCRYPT_SECRET}`).toString();
  },
}
