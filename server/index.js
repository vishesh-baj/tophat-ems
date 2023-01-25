import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_URL, () => {
    console.log("DATABASE CONNECTED");
  })
  .then(() => {
    app.listen(8080, () => {
      console.log(`SERVER STARTED AT PORT: ${8080}`);
    });
  })
  .catch((error) => {
    console.log(`ERROR  OCCURED: ${error}`);
  });
