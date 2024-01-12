import express, { Request, Response } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const app = express();
const PORT = 3000;

// Display "Hello, World!" on the index route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Wor!');
});

app.get('/scrape', async (req: Request, res: Response) => {
  try {
    // Use a different URL for testing (as the original URL is not accessible)
    const response = await axios.get('https://webscraper.io/test-sites/e-commerce/allinone');
    const $ = cheerio.load(response.data);

    const productTitles: string[] = [];

    // Adjust selectors based on the actual HTML structure of the target website
    $('.title').each((index: number, element: cheerio.Element) => {
      productTitles.push($(element).text());
    });

    res.json({ productTitles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
