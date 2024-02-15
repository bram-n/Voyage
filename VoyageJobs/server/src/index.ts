import express, { Request, Response } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const app = express();
const PORT = 3001; // Change the port to avoid conflicts with your React app

app.use(express.json());

app.get('/api/job-listings', async (req: Request, res: Response) => {
  try {
    // Make a request to the SerpApi Google Jobs Listing API
    const response = await axios.get('https://serpapi.com/search?engine=google_jobs_listing&q=barista%20new%20york');

    // Extract relevant data from the SerpApi response
    const jobData = response.data?.jobs_results || [];

    // Send the job data to the React app
    res.json({ jobData });
  } catch (error) {
    console.error('Error fetching job data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
