const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Define the /activity/execute route
app.post('/activity/execute', (req, res) => {
    console.log('Execute Activity Called');
    res.json({ status: 'Executed successfully' });
});

// Define other routes if needed (save, publish, validate, etc.)
app.post('/activity/save', (req, res) => {
    res.json({ status: 'Save Successful' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
