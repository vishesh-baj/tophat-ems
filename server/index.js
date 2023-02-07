require("dotenv").config();
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");
// Connect to MongoDB
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(`ERROR OCCURED: ${err}`));

// Create express app
const app = express();

// Use helmet for security
app.use(helmet());
// cross origin resourse sharing
app.use(cors());
// Parse JSON request body
app.use(express.json());

// routes
app.use("/api/auth", loginRoute);
app.use("/api", userRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT: ${PORT}`);
});
