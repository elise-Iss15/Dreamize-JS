const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const courseRoutes = require("./routes/courseRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/courses", courseRoutes);

// Connect to MongoDB, then start the server
//
const connectDB = require("./config/db");
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
