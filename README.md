# Simple Server

A simple Node.js server built with Express.js, designed for easy deployment to Vercel.

## Features

- RESTful API endpoints
- CORS enabled
- JSON parsing middleware
- Error handling
- Health check endpoint
- Multiple test routes

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message with timestamp |
| GET | `/health` | Health check endpoint |
| GET | `/hello/:name` | Personalized greeting |
| POST | `/echo` | Echo back the request body |
| GET | `/search?q=query&limit=10` | Search with query parameters |
| GET | `/random` | Random data generator |
| GET | `/api/info` | API information and endpoints list |

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   # or
   npm run dev
   ```

3. The server will run on `http://localhost:3000`

## Testing the API

### Basic Routes
```bash
# Welcome endpoint
curl http://localhost:3000/

# Health check
curl http://localhost:3000/health

# Hello with name parameter
curl http://localhost:3000/hello/World

# API info
curl http://localhost:3000/api/info
```

### POST Route
```bash
# Echo endpoint
curl -X POST http://localhost:3000/echo \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello from POST request"}'
```

### Query Parameters
```bash
# Search with query parameters
curl "http://localhost:3000/search?q=nodejs&limit=5"

# Random data
curl http://localhost:3000/random
```

## Deployment to Vercel

### Option 1: Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: GitHub Integration
1. Push your code to a GitHub repository
2. Connect your GitHub account to Vercel
3. Import the repository in Vercel dashboard
4. Deploy automatically

### Option 3: Vercel Dashboard
1. Visit [vercel.com](https://vercel.com)
2. Create a new project
3. Upload your project files
4. Deploy

## Environment Variables

The server uses the following environment variables:
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)

## Project Structure

```
simple-server/
├── index.js          # Main server file
├── package.json      # Dependencies and scripts
├── vercel.json       # Vercel deployment configuration
└── README.md         # This file
```

## Dependencies

- **express**: Web framework for Node.js
- **cors**: CORS middleware for handling cross-origin requests

## License

MIT
