const express = require('express');
const next = require('next');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Set up the upload directory
const uploadDirectory = path.join(process.cwd(), 'public', 'images');
fs.mkdirSync(uploadDirectory, { recursive: true });

// Multer configuration for storing uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 50000000 }, // 50 MB file size limit
  fileFilter: (req, file, cb) => {
    // Restrict file type to images only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  }
});

nextApp.prepare().then(() => {
  const app = express();
  
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  // Image upload endpoint
  app.post('/api/upload', upload.single('file'), (req, res) => {
    if (req.file) {
      res.status(200).json({ filepath: `/images/${req.file.filename}` });
    } else {
      res.status(400).json({ error: 'No file uploaded.' });
    }
  });

  // Serve other routes via Next.js
  app.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the Express server
  app.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
});