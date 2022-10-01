import { NextApiRequest, NextApiResponse } from 'next';
import { getMessageTemplate } from '../../email-utils/message-template';
import { Email } from '../../email-utils/email';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message, city, contactNumber } = req.body;
    if (!name || !email || !message) {
      const message = 'Invalid request, name, email, or message is not defined';
      return res.status(400).send({ message });
    }
    const template = getMessageTemplate(
      name,
      email,
      message,
      city,
      contactNumber
    );

    try {
      await new Email('Message from My website', template).send();

      res.send({ message: 'Email sent successfully' });
    } catch (err: any) {
      console.log('🛑🛑🛑', err);

      res.status(500).send({ message: err.message || "Couldn't send message" });
    }
  } else {
    return res.status(400).json({ message: "Endpoint doesn't exit" });
  }
}

export default handler;
