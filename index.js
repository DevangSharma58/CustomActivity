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
