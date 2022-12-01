import nodemailer from 'nodemailer';
import { mailConfig } from '../config/mailConfig';

export const sendMailService = async (email: string) => {
  try {
    const code = (Math.random() * 100000).toFixed(0);
    const mssg = {
      from: `Desarrollador de Tharsis - Tharsis Dev <${process.env.NODEMAILER_EMAIL}>`,
      to: email,
      subject: `Confirmación de administrador #${code}`,
      html: `
        <p>Tu correo ${email} ha sido añadido a la base de datos de Tharsis.</p>
        <br/>
        <br/>
        <p><code>No responder a este correo.</code></p>
      `,
    }
    const transport = nodemailer.createTransport(mailConfig);
    const info = await transport.sendMail(mssg);
    return info.messageId;
  } catch (error: any) {
    throw new Error(`Error sending email: ${error.message}`);
  }

}
