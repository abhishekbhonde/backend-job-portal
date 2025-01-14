# Job Board Backend API

This project is a backend implementation for a job board application. It provides RESTful APIs to manage job listings, including creating, reading, updating, and deleting job records. The backend is built using Node.js, TypeScript, Sequelize ORM, and MySQL.

## Features
- Create, update, delete, and fetch job listings.
- MySQL database integration using Sequelize ORM.
- Well-structured codebase with environment configuration.
- Dockerized setup for deployment.

## Prerequisites
Ensure you have the following installed on your system:
- Node.js (>= 16.x)
- MySQL (>= 8.x)
- Docker (optional, for containerized setup)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/job-board-backend.git
   cd job-board-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DB_NAME=example
   DB_USER=admin
   DB_PASSWORD=examplepassword
   DB_HOST=database-1.***
   DB_PORT=3306
   PORT=3000
   ```

4. Initialize the database:
   Ensure your MySQL database is running and accessible. Then run:
   ```bash
   npm run db:sync
   ```
   This will synchronize the database schema with the models.

## Usage
1. Start the server:
   ```bash
   npm run dev
   ```
   The server will start on the specified port (default: `3000`).

2. Access the API:
   Use an API testing tool like Postman or cURL to interact with the endpoints.
   Example: Fetch all jobs
   ```bash
   GET http://localhost:3000/api/jobs
   ```

## Endpoints
### Jobs
- GET /api/jobs: Fetch all job listings.
- GET /api/jobs/:id: Fetch a specific job listing by ID.
- POST /api/jobs: Create a new job listing.
- PUT /api/jobs/:id: Update a job listing by ID.
- DELETE /api/jobs/:id: Delete a job listing by ID.

## Project Structure
```plaintext
src/
├── app.ts           # Application entry point
├── models/          # Sequelize models
│   ├── jobModels.ts # Job model definition
├── routes/          # API routes
├── controllers/     # Route handlers         
├── server.ts        # Server initialization
```

## Deployment
To deploy the application using Docker:
1. Build the Docker image:
   ```bash
   docker build -t job-board-backend .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 --env-file .env job-board-backend
   ```

The server will be accessible on `http://localhost:3000`.


## Contact
For questions or support, contact [abhishekbhonde31@gmail.com].

