import express from 'express';
import bodyParser from 'body-parser';
import jobRoutes from './routes/jobRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/jobs', jobRoutes);

export default app;
