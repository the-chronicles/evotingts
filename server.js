require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./src/routes/authRoutes");
const candidateRoutes = require("./src/routes/candidateRoutes");
const voteRoutes = require("./src/routes/voteRoutes");
const resultRoutes = require("./src/routes/resultRoutes");

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  // .connect("mongodb://localhost/voting-platform", {})
  // .connect("mongodb+srv://Chronicles:airdrop1@evotingts.onpyj.mongodb.net/?retryWrites=true&w=majority&appName=Evotingts", {})
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.use("/api", authRoutes);
app.use("/api", candidateRoutes);
app.use("/api", voteRoutes);
app.use("/api", resultRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
