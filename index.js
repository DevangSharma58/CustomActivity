<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Handle GET request for /activity/execute
app.get('/activity/execute', (req, res) => {
    res.json({ message: 'This endpoint is meant for POST requests. Please use POST instead.' });
});

// POST request handler for the /activity/execute endpoint
app.post('/activity/execute', (req, res) => {
    console.log('Execute request received:', req.body);
    res.json({ status: 'Executed successfully' });
});

// POST request handler for the /activity/save endpoint
app.post('/activity/save', (req, res) => {
    console.log('Save request received:', req.body);
    res.json({ status: 'Saved successfully' });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
=======
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Handle GET request for /activity/execute
app.get('/activity/execute', (req, res) => {
    res.json({ message: 'This endpoint is meant for POST requests. Please use POST instead.' });
});

// POST request handler for the /activity/execute endpoint
app.post('/activity/execute', (req, res) => {
    console.log('Execute request received:', req.body);
    res.json({ status: 'Executed successfully' });
});

// POST request handler for the /activity/save endpoint
app.post('/activity/save', (req, res) => {
    console.log('Save request received:', req.body);
    res.json({ status: 'Saved successfully' });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
>>>>>>> 1880d4f7585fae77c13a5e49045ce542f7f31da1
