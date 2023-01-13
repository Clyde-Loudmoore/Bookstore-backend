import express from 'express';
import cors from 'cors';

import routes from './routes';
import config from './config';
import './types/express/index';
import errorsHandler from './middlewares/errorsHandler';

const app = express();

app.use(cors({ origin: [config.clientUrl] }));
app.use(express.json({ limit: '50mb' }));
app.use('/public', express.static('public'));
app.use('/api', routes);

app.use(errorsHandler);

export default app;
