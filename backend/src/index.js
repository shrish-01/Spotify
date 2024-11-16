import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from '@clerk/express'

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import songRoutes from "./routes/song.routes.js";
import albumRoutes from "./routes/album.routes.js";
import statsRoutes from "./routes/stats.routes.js";
import { connectDB } from "./lib/db.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

// app.get("/", (req, res) => {
//     res.send("This is a response from the index.js file directly!");
// });

app.use(express.json());
app.use(clerkMiddleware());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/stats', statsRoutes);


app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
    connectDB();
})