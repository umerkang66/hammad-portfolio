import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

const FILE_PATH = path.join(process.cwd(), 'data', 'all-services.json');

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    try {
      await fs.writeFile(FILE_PATH, JSON.stringify(req.body));

      await res.revalidate('/');
      await res.revalidate('/services');

      return res.send({ message: 'Updated services successfully!' });
    } catch (err) {
      return res.status(400).send({ message: "Couldn't save the services" });
    }
  }

  throw new Error("Endpoint doesn't found");
}

export default handler;
