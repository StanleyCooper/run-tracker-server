const express = require('express');

const app = express();

// Basic get request
app.get('/', (req, res) => {
    res.send('Successful response');
})

app.listen(3000, () => console.log('Run tracker server is listening to port 3000'));