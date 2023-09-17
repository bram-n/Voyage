// Import the express in typescript file
import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts"

const app: express.Application = express();
const port: number = 3000;

app.use(cors());
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Express");
});

app.get('/fetchData', async (_req: Request, _res: Response) => {
    try {
        const response = await axios.get(apiEndpoint); // Replace with the actual API endpoint
        const data = response.data;
        _res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        _res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`TypeScript with Express http://localhost:${port}/`);
});
