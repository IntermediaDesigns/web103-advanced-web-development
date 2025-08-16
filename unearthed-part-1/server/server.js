
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import giftsRouter from './routes/gifts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from server/public (built files)
app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use(express.static('./public'));

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.use('/gifts', giftsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
