import express from 'express';
import handler from './api/proxy.js';

const app = express();
app.use(express.json());

app.all('/api/proxy*', (req, res) => handler(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
