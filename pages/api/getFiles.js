import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const directoryPath = path.join(process.cwd(), 'public/images');
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        res.status(500).json({ message: 'Unable to scan directory: ' + err });
      } else {
        res.status(200).json({ files });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}