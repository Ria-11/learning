import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';
import userRoutes from './Routes/user.routes.js';

dotenv.config();

const app = express();
app.use(express.json()); 


connectDB();


app.use("/api/v1/users", userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
