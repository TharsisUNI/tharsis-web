import dotenv from 'dotenv';

dotenv.config();

export const mailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: `${process.env.NODEMAILER_EMAIL}`,
    pass: `${process.env.NODEMAILER_PASS}`,
  },
}
