const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Your existing routes for custom activity
app.post('/activity/execute', (req, res) => {
    // logic for execute
    res.json({status: 'Executed successfully'});
});

app.post('/activity/save', (req, res) => {
    // logic for save
    res.json({status: 'Saved successfully'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
