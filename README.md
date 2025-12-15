# My REST API

This project is a simple RESTful API built with TypeScript and Express. It provides endpoints for user management, including creating, retrieving, and updating user information.

## Project Structure

```
my-rest-api
├── src
│   ├── server.ts            # Entry point of the application
│   ├── app.ts               # Express application setup
│   ├── routes               # Contains API route definitions
│   │   └── api.ts           # API routes for user management
│   ├── controllers          # Contains request handlers
│   │   └── userController.ts # User-related request handlers
│   ├── services             # Contains business logic
│   │   └── userService.ts   # User-related business logic
│   ├── models               # Contains data models
│   │   └── user.ts          # User model definition
│   ├── middlewares          # Contains middleware functions
│   │   └── errorHandler.ts   # Error handling middleware
│   └── types                # Type definitions
│       └── index.d.ts       # TypeScript interfaces
├── package.json             # NPM dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── .env.example             # Example environment variables
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-rest-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Create a `.env` file based on the `.env.example` file and set your environment variables.

2. Start the server:
   ```
   npm start
   ```

The server will start on the specified port, and you can access the API endpoints for user management.

## API Endpoints

- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Retrieve a user by ID
- `PUT /api/users/:id` - Update a user by ID

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.