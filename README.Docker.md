# Docker Setup for TechWarea

This React application has been containerized with Docker using separate Dockerfiles for development and production environments.

## Quick Start

### Development Environment (Port 8900)
```bash
npm run docker:dev
```
Access the app at: http://localhost:8900

### Production Environment (Port 8901)
```bash
npm run docker:prod
```
Access the app at: http://localhost:8901

## Available Docker Commands

- `npm run docker:dev` - Start development container
- `npm run docker:prod` - Start production container  
- `npm run docker:build` - Build both containers
- `npm run docker:down` - Stop all containers

## Manual Docker Commands

### Development
```bash
docker-compose up techwarea-dev
```

### Production
```bash
docker-compose up techwarea-prod
```

### Build containers
```bash
docker-compose build
```

### Stop containers
```bash
docker-compose down
```

## Docker Files Structure

- **`Dockerfile`** - Development environment with Node.js and hot reload
- **`Dockerfile.prod`** - Production environment with Apache web server
- **`apache.conf`** - Apache configuration with React Router support
- **`docker-compose.yml`** - Orchestrates both environments

## Container Details

- **Development**: Hot reload enabled, source code mounted as volume, Node.js dev server
- **Production**: Optimized build served by Apache HTTP Server with compression and caching
- **Ports**: Dev (8900), Prod (8901)

## Requirements

- Docker
- Docker Compose
