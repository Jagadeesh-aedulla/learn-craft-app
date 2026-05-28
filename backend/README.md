# LearnCraftAI Backend API

A professional Node.js/Express backend API for the LearnCraftAI learning platform, built with TypeScript following senior developer best practices.

## 🏗️ Architecture

```
backend/
├── src/
│   ├── controllers/          # Request handlers
│   ├── models/              # Data models and schemas
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   ├── services/           # Business logic
│   ├── utils/               # Utility functions
│   ├── config/              # Configuration files
│   ├── types/               # TypeScript type definitions
│   ├── app.ts               # Express app setup
│   └── server.ts            # Server entry point
├── data/                    # Static data (for now)
├── tests/                   # Test files
├── logs/                    # Log files
└── dist/                    # Compiled JavaScript
```

## 🚀 Features

- **RESTful API** with proper HTTP methods and status codes
- **TypeScript** for type safety and better development experience
- **Modular Architecture** with separation of concerns
- **Error Handling** with custom error middleware
- **Request Logging** with Winston
- **Rate Limiting** to prevent abuse
- **CORS Support** for frontend integration
- **Security** with Helmet.js
- **Compression** for better performance
- **Health Checks** for monitoring
- **API Documentation** endpoint

## 📚 API Endpoints

### Technologies
- `GET /api/v1/technologies` - Get all technologies
- `GET /api/v1/technologies/:id` - Get technology by ID
- `GET /api/v1/technologies/categories` - Get all categories
- `GET /api/v1/technologies/search?q=query` - Search technologies
- `GET /api/v1/technologies/category/:category` - Get by category
- `GET /api/v1/technologies/:id/related` - Get related technologies

### Tutorials
- `GET /api/v1/tutorials` - Get all tutorials
- `GET /api/v1/tutorials/:id` - Get tutorial by ID
- `GET /api/v1/tutorials/technology/:technologyId` - Get by technology
- `GET /api/v1/tutorials/:tutorialId/sections` - Get tutorial sections
- `GET /api/v1/tutorials/:tutorialId/lessons` - Get tutorial lessons
- `GET /api/v1/tutorials/stats` - Get tutorial statistics
- `GET /api/v1/tutorials/search?q=query` - Search tutorials

### System
- `GET /health` - Health check
- `GET /api/v1/docs` - API documentation

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
npm start
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📝 Environment Variables

```env
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
LOG_LEVEL=info
LOG_FORMAT=combined
```

## 🎯 Data Models

### Technology
```typescript
interface Technology {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  topics: string[];
  link: string;
  category: 'frontend' | 'backend' | 'database' | 'web-tools' | 'data-science' | 'other';
}
```

### Tutorial
```typescript
interface TutorialContent {
  id: string;
  technologyId: string;
  title: string;
  description: string;
  sections: Section[];
  totalLessons: number;
  estimatedDuration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  learningObjectives?: string[];
}
```

## 🔧 Development

### Linting
```bash
npm run lint
npm run lint:fix
```

### Building
```bash
npm run build
```

### Monitoring
- Check logs in `logs/` directory
- Monitor health at `/health`
- View API docs at `/api/v1/docs`

## 🚀 Deployment

1. Build the application:
```bash
npm run build
```

2. Set production environment variables
3. Start the server:
```bash
npm start
```

## 📊 Performance Features

- **Compression**: Gzip compression for responses
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Caching**: Static data served from memory
- **Logging**: Structured logging with Winston
- **Security**: Helmet.js for security headers

## 🔄 Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- Authentication & Authorization
- Real-time updates with WebSockets
- Caching with Redis
- API versioning
- GraphQL support
- Microservices architecture

## 📄 License

MIT License - see LICENSE file for details
