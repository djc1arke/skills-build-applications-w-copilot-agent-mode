import express from 'express';
import './config/database.js';
import { getApiBaseUrl } from './config/baseUrl.js';
import apiRouter from './routes/api.js';

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (_request, response) => {
  response.json({
    message: 'OctoFit Tracker API',
    baseUrl: getApiBaseUrl(),
  });
});

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', baseUrl: getApiBaseUrl() });
});

app.listen(port, () => {
  console.log(`OctoFit API listening on port ${port}`);
  console.log(`API base URL: ${getApiBaseUrl()}`);
});