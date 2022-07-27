import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { getEmailTemplate } from '../../email-templates/email';
import { htmlToText } from 'html-to-text';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).send({ message: 'Invalid request' });
    }
    const template = getEmailTemplate(name, email, message);

    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 465,
      auth: {
        user: process.env.SEND_IN_BLUE_USERNAME,
        pass: process.env.SEND_IN_BLUE_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: "Message from Hammad's website",
        html: template,
        text: htmlToText(template),
      });
      res.send({ message: 'Email sent successfully' });
    } catch (err: any) {
      res.status(500).send({ message: err.message || "Couldn't send message" });
    }
  } else {
    return res.status(400).json({ message: "Endpoint doesn't exit" });
  }
}

export default handler;
