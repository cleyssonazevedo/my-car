const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
});

console.log('Server started');
app.listen(process.env.PORT || 3000);