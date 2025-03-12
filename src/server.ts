import express from 'express';
import cors from 'cors';
import { Calculator } from './calculator';

// Initialize Express application
const app = express();
const port = 3000;


// Middleware configuration

// Enable CORS for all routes to allow cross-origin requests
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Route for adding numbers using String Calculator
app.post('/calculate-sum', (req, res) => {
    const { numbers } = req.body;

    const stringCalculator = new Calculator();

    try {
        const sum = stringCalculator.add(numbers);
        res.json({ sum });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});