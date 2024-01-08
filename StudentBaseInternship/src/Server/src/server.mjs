// server.mjs (Note the .mjs extension for ES6 modules)
import express from "express";
import axios from "axios";
import { load } from "cheerio";

const app = express();
const port = process.env.PORT || 3001;

app.get("/api/scrapeWebsite", async (req, res) => {
  try {
    const response = await axios.get("https://example.com");
    const data = load(response.data);

    // Your scraping logic here

    res.json({ data: response.data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log("Hello world");
  console.log(`Server is running on http://localhost:${port}`);
});
