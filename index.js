const express = require('express');
const bodyParser = require('body-parser');
const app = express();
<<<<<<< HEAD

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
=======
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

app.use(bodyParser.json());

// Endpoint for Execute
app.post('/activity/execute', (req, res) => {
  console.log('Activity executed');
  res.status(200).send({ status: 'Executed successfully' });
});

// Endpoint for Save
app.post('/activity/save', (req, res) => {
  console.log('Activity saved');
  res.status(200).send({ status: 'Saved successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
>>>>>>> 29a1db6 (Added index.html and updated index.js)
});
