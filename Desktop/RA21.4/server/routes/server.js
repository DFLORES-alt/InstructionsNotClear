const express = require('express');
const app = express();
const port = 9000;

// Sample data
const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

// Route to fetch data
app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, function() {
    console.log('Listening on port: ' + port);
});
