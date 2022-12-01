import CryptoJS from "crypto-js";

export const cryptoManager = {
  decryptHash: (hash: string): string => {
    const bytes = CryptoJS.AES.decrypt(hash, `${process.env.ENCRYPT_SECRET}`);
    return bytes.toString(CryptoJS.enc.Utf8);
  },
  validateText: (text: string, encryptedText: string): boolean => {
    if (text === cryptoManager.decryptHash(encryptedText)) return true;
    return false;
  },
}
