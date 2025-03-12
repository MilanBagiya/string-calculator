import express from 'express';
import cors from 'cors';

// Initialize Express application
const app = express();
const port = 3000;


// Middleware configuration

// Enable CORS for all routes to allow cross-origin requests
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});