import express from 'express';
import {setRoutes} from './routes/api';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set up routes
setRoutes(app);

export default app;