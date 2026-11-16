import express from 'express';

const app = express();
const PORT = 3000;

// 讓 Express 能解析 JSON 格式的 Request Body
app.use(express.json());

// GET API
app.get('/', (_req, res) => {
  res.json({
    message: 'Hello from Nexus Backend with Express + TypeScript!'
  });
});

// 啟動 Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
