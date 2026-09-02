import express from 'express';
import './config/database.js';
import apiRoutes from './routes.js';

const app = express();
const port = Number(process.env.PORT) || 8000;
const host = process.env.HOST || '0.0.0.0';
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiUrl: baseUrl });
});

app.listen(port, host, () => {
  console.log(`OctoFit API listening at ${baseUrl}`);
});