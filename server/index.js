import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// const EmployeeRoutes = require("./routes/employee.routes");
// const UserRoutes = require("./routes/user.routes");

const app = express();

// middlewares
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// database connection
mongoose.connect("mongodb://localhost:27017/employee-management-system", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// routes
// app.use("/employees", EmployeeRoutes);
// app.use("/users", UserRoutes);

// handle errors
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
