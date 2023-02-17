const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require('dotenv')
dotenv.config();
const app = express();
const API_KEY = process.env.API_KEY;

app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}))
app.use(express.json())
app.get("/search", async (req, res) => {
  try {
    const { searchTerm } = req.body;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&maxResults=12&type=video&key=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
