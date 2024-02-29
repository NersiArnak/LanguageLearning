const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/alphabet', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'alphabet.html'));
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});