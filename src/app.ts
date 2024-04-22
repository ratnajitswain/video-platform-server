import express from 'express';
import userRoutes from './routes/user';
// import videoRoutes from './routes/video';
// import path from 'path';
import cors from 'cors';

// Initialize Express app
const app = express();
app.use(cors());
// Middleware
app.use(express.json());
// const videosDirectory = path.join(__dirname, '../static', 'videos');

// Serve HLS files
// app.use('/videos', express.static(videosDirectory));
// Routes
app.use('/user', userRoutes);
// app.use('/video', videoRoutes);
export default app;
