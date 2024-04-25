import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, author, excerpt, date, content } = req.body;

    // Create the markdown content
    const markdownContent = `---
title: "${title}"
author: "${author}"
excerpt: "${excerpt}"
date: "${date}"
---

${content}
`;

    // Define the path to the new file
    const filePath = path.join(process.cwd(), 'blogs', `${title.replace(/ /g, '-')}.md`);

    // Write the file
    fs.writeFile(filePath, markdownContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        res.status(500).json({ message: 'Error writing file' });
      } else {
        console.log('File written successfully');
        res.status(200).json({ message: 'File written successfully' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}