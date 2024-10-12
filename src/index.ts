import express, { Application } from 'express';
import dotenv from 'dotenv';
import connectDB from './database';
import mediaRoutes from './routes/media_routes';


dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json());

// routes
app.use('/v1/imgbb-upload', mediaRoutes);

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
