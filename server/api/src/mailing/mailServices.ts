import nodemailer from 'nodemailer';
import { mailConfig } from '../config/mailConfig';

export const sendMailService = async (email: string) => {
  try {
    const mssg = {
      from: `${process.env.NODEMAILER_EMAIL}`,
      to: email,
      subject: 'Correo de prueba',
      text: 'Envío de correo desde tharsis.pe usando nodemailer',
    }
    const transport = nodemailer.createTransport(mailConfig);
    const info = await transport.sendMail(mssg);
    return info.messageId;
  } catch (error: any) {
    throw new Error(`Error sending email: ${error.message}`);
  }

}
