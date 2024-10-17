/*
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/activity/execute', (req, res) => {
   res.json({ status: 'Executed successfully' });
});

app.post('/activity/save', (req, res) => {
   res.json({ status: 'Saved successfully' });
});

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});
*/

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// POST request handler for the /activity/execute endpoint
app.post('/activity/execute', (req, res) => {
    // Log the request body (optional, for debugging)
    console.log('Execute request received:', req.body);

    // Respond with a success message
    res.json({ status: 'Executed successfully' });
});

// POST request handler for the /activity/save endpoint
app.post('/activity/save', (req, res) => {
    // Log the request body (optional, for debugging)
    console.log('Save request received:', req.body);

    // Respond with a success message
    res.json({ status: 'Saved successfully' });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
