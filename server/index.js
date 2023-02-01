import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import loginRoute from "./routes/login.js";

const app = express();
// dot-env middleware
dotenv.config();
const port = process.env.PORT || 5000;
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Secure your Express app with various HTTP headers
app.use(helmet());
// Enable CORS
app.use(cors());
// Use routes
app.use("/api/auth", loginRoute);
// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://vishesh:vishesh@cluster0.9tly6lt.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server started on port ${port}`));
