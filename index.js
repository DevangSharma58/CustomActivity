import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

// Initialize app
const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

// Serve static files (like index.html)
app.use(express.static(path.resolve('public')));

// Routes

// Home route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

// POST route for /activity/execute with debug log and JSON response
app.post('/activity/execute', (req, res) => {
    console.log("Execute endpoint hit");  // Debug log
    res.json({ status: 'Executed successfully' }); // JSON response
});

// POST route for /activity/save with debug log and JSON response
app.post('/activity/save', (req, res) => {
    console.log("Save endpoint hit, received data:", req.body);  // Debug log with received data
    res.json({ status: 'Saved successfully', receivedValue: req.body.value }); // JSON response
});

// POST route for /activity/publish with debug log and JSON response
app.post('/activity/publish', (req, res) => {
    console.log("Publish endpoint hit");  // Debug log
    res.json({ status: 'Published successfully' }); // JSON response
});

// POST route for /activity/validate with debug log and JSON response
app.post('/activity/validate', (req, res) => {
    console.log("Validate endpoint hit");  // Debug log
    res.json({ status: 'Validated successfully' }); // JSON response
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
