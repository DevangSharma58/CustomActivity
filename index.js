import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

// Initialize app
const app = express();
app.use(bodyParser.json());

// Serve static files (like index.html)
app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

// Define POST route for /activity/execute
app.post('/activity/execute', (req, res) => {
    res.json({ status: 'Executed successfully' });
});

// Define POST route for /activity/save
app.post('/activity/save', (req, res) => {
    res.json({ status: 'Saved successfully' });
});

// Define POST route for /activity/publish
app.post('/activity/publish', (req, res) => {
    res.json({ status: 'Published successfully' });
});

// Define POST route for /activity/validate
app.post('/activity/validate', (req, res) => {
    res.json({ status: 'Validated successfully' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
