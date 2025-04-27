import express from 'express';
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ hello: "world" });
});

// Routes
import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
