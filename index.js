const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Simple Server!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Hello route with parameter
app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.json({
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString()
  });
});

// Test POST route
app.post('/echo', (req, res) => {
  res.json({
    message: 'Echo endpoint',
    receivedData: req.body,
    method: req.method,
    timestamp: new Date().toISOString()
  });
});

// Test route with query parameters
app.get('/search', (req, res) => {
  const { q, limit = 10 } = req.query;
  res.json({
    query: q,
    limit: parseInt(limit),
    results: [
      { id: 1, title: `Result 1 for "${q}"` },
      { id: 2, title: `Result 2 for "${q}"` },
      { id: 3, title: `Result 3 for "${q}"` }
    ],
    timestamp: new Date().toISOString()
  });
});

// Random data endpoint
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  res.json({
    randomNumber,
    randomColor,
    uuid: Math.random().toString(36).substring(2, 15),
    timestamp: new Date().toISOString()
  });
});

// API info route
app.get('/api/info', (req, res) => {
  res.json({
    name: 'Simple Server API',
    version: '1.0.0',
    endpoints: [
      'GET /',
      'GET /health',
      'GET /hello/:name',
      'POST /echo',
      'GET /search?q=query&limit=10',
      'GET /random',
      'GET /api/info'
    ],
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString()
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
