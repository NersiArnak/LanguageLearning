const express = require('express');
const fs = require('fs')
const path = require('path')
const app = express();

const publicPath = path.join(__dirname, '/../../front-end', 'public');
console.log(publicPath)

// Используем полный путь для обслуживания статических файлов
app.use(express.static(publicPath));

app.get('/', (req, res) => {

  const filePath = path.resolve(__dirname, '../../front-end/html/index.html');
  res.sendFile(filePath);
});

app.get('/alphabet', (req, res) => {
  const filePath = path.resolve(__dirname, '../../front-end/html/alphabet.html');
  res.sendFile(filePath);
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});