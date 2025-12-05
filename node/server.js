const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// server.js
const express = require('express');
const app = express();
const port = 3000;

// 模擬留言資料
const messages = [
  { id: 1, content: '這是第一則留言' },
  { id: 2, content: '這是第二則留言' },
  { id: 3, content: '這是第三則留言' },
];

// API 路由，返回留言資料
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// 靜態檔案服務，提供 HTML 和 JS
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
